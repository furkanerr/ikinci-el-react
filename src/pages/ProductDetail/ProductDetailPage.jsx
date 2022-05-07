/**Depenedencies */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

/**Style */
import ProductDetailStyle from "../../styles/ProductDetailPageStyle/ProductDetailPageStyle.module.css";

/**Components */
import BidModal from "../../components/BidModal/BidModal";
import Navbar from "../../components/Navbar/Navbar";

/**Icon */
import undefinedProduct from "../../img/undefinedProduct.jpg";

/**Services */
import api from "../../services/api";

/**Context */
import { useAuth } from "../../context/authContext";

/**Toastify */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function ProductDetailPage() {

  const [bidModal, setBidModal] = useState(false);
  const [data, setProduct] = useState(null);
  const [offerId, setOfferId] = useState(null);
  const [deneme, setdeneme] = useState(0);
  const { user } = useAuth();

  const toggleBidModal = () => {
    setBidModal(!bidModal);
  };

  const { id } = useParams();
  const navigate = useNavigate();

  //  const { isError, isLoading, data } = useQuery(["product", id], () =>
  //    api.GetProductById(id)

  //  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.GetProductById(id);
      setProduct(response);
    };
    fetchData();
  }, [deneme]);

  console.log(data);

  //  if (isLoading) return "Loading...";

  // if (isError) return "An error has occurred: " + isError.message;

  const handleDelete = async (id) => {
    const response = await api.DeleteProduct(id);
    console.log(response);
    if (response.status === 200) {
      const notify = () => {
        toast.success("Ürün silme işlemi başarılı", {
          style: { backgroundColor: " #F1FFF0", color: "#46AF32" },

          autoClose: 3000,
          draggable: false,
          newestOnTop: true,
          position: "top-right",
          closeButton: false,
          progressBar: false,
          pauseOnHover: false,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
        });
      };
      notify();
      navigate("/");
    }
  };

  const handleDeleteOffer = async () => {
    setOfferId();
    const response = await api.DeleteOffer(
      data?.offers?.find(
        (offer) => offer?.users_permissions_user === user?.data?.id
      )?.id
    );
    if (response.status == 200) {
      setdeneme(deneme + 1);
      const notify = () => {
        toast.success("Teklif geri çekildi", {
          style: { backgroundColor: " #F1FFF0", color: "#46AF32" },

          autoClose: 3000,
          draggable: false,
          newestOnTop: true,
          position: "top-right",
          closeButton: false,
          progressBar: false,
          pauseOnHover: false,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
        });
      };
      notify();
    }
  };

  const handleBuy = async () => {
    try {
      const response = await api.UpdateProduct(data.id, {
        users_permissions_user: user.data.id,
        isSold: true,
      });
      if (response.status == 200) {
        setdeneme(deneme + 1);
        const notify = () => {
          toast.success("Satın alındı", {
            style: { backgroundColor: "  #F1FFF0", color: "#46AF32" },

            autoClose: 3000,
            draggable: false,
            newestOnTop: true,
            position: "top-right",
            closeButton: false,
            progressBar: false,
            pauseOnHover: false,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "colored",
          });
        };
        notify();
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={ProductDetailStyle.Container}>
      <Navbar />
      <div className={ProductDetailStyle.ProductDetail}>
        <div className={ProductDetailStyle.ProductDetailCard}>
          {bidModal ? (
            <div className={ProductDetailStyle.Modal}>
              <BidModal
                toggleModal={toggleBidModal}
                data={data}
                isOpen={bidModal}
                setdeneme={setdeneme}
              />
            </div>
          ) : null}

          <div className={ProductDetailStyle.ImageContainer}>
            <img
              src={
                data?.image?.formats?.small?.url == null
                  ? undefinedProduct
                  : `https://bootcamp.akbolat.net/${data?.image?.formats?.small?.url}`
              }
              className={ProductDetailStyle.Image}
            />
          </div>
          <div className={ProductDetailStyle.InfoContainer}>
            <div className={ProductDetailStyle.Name}>{data?.name}</div>
            <div className={ProductDetailStyle.Price}>{data?.price} TL</div>

            <div className={ProductDetailStyle.ProductDetailContainer}>
              <div className={ProductDetailStyle.Headers}>
                <div className={ProductDetailStyle.BrandHeader}>Marka:</div>
                <div className={ProductDetailStyle.ColorHeader}>Renk:</div>
                <div className={ProductDetailStyle.KullanimDurumuHeader}>
                  Kullanım Durumu:
                </div>
              </div>

              <div className={ProductDetailStyle.ProductsInfos}>
                <div className={ProductDetailStyle.Brand}>{data?.brand}</div>
                <div className={ProductDetailStyle.Color}>{data?.color}</div>
                <div className={ProductDetailStyle.KullanimDurumu}>
                  {data?.status}
                </div>
              </div>
            </div>
            {data?.offers?.some(
              (offer) => offer?.users_permissions_user == user?.data?.id
            ) ? (
              <div className={ProductDetailStyle.OfferText}>
                Verilen Teklif :
                <span>
                  {
                    data?.offers?.find(
                      (offer) =>
                        offer?.users_permissions_user === user?.data?.id
                    )?.offerPrice
                  }{" "}
                  TL
                </span>
              </div>
            ) : null}
            <div className={ProductDetailStyle.Info}>{data?.description}</div>
            <div className={ProductDetailStyle.ButtonGroup}>
              {user?.data?.id == data?.users_permissions_user?.id ? (
                <div
                  className={ProductDetailStyle.MyProduct}
                  onClick={() => handleDelete(data?.id)}
                >
                  Ürünü sil
                </div>
              ) : data?.isOfferable == true ? (
                <>
                  <div
                    className={ProductDetailStyle.BuyButton}
                    onClick={() => handleBuy()}
                  >
                    Satın Al
                  </div>
                  {data?.offers?.some(
                    (offer) => offer?.users_permissions_user == user?.data?.id
                  ) ? (
                    <div
                      className={ProductDetailStyle.DeleteMyOfferButton}
                      onClick={() => handleDeleteOffer(offerId)}
                    >
                      Teklifi Geri Çek
                    </div>
                  ) : (
                    <div
                      className={ProductDetailStyle.BidButton}
                      onClick={toggleBidModal}
                    >
                      Teklif Ver
                    </div>
                  )}
                </>
              ) : (
                <div className={ProductDetailStyle.Sold}>
                  Bu Ürün Satışta Değil
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
