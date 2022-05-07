/**Dependencies */
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

/**Style */
import PageStyle from "../../styles/ProductUploadStyle/ProductUploadStyle.module.css";

/**Validation */
import AddProductValidation from "../../constants/Validations/addProductValidation";

/**Icon */
import CancelIcon from "../../constants/Icons/cancelIcon";

/**Services */
import api from "../../services/api";
/**Components */
import ImagePreview from "../../components/ImagePreview/ImagePreview";
import DropZone from "../../components/ImageDropZone/DropZone";
import Navbar from "../../components/Navbar/Navbar";

/**Toastify */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../../context/authContext";

toast.configure();
function ProductUpload() {
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [usingStatus, setUsingStatus] = useState([]);
  const [images, setImages] = useState(null);
  const [userId, setUserId] = useState(0);
  const { user } = useAuth();
  useEffect(() => {
    const fetchDatas = async () => {
      const { data } = await api.GetCategories();
      const { data: color } = await api.GetAllColor();
      const { data: brands } = await api.GetAllBrands();
      const { data: usingStatus } = await api.GetAllUsingStatus();

     // const user = await api.FetchMe();
      setUserId(user?.data?.id);

      setCategories(data);
      setColors(color);
      setBrands(brands);
      setUsingStatus(usingStatus);
    };
    fetchDatas();
  }, []);

  const formik = useFormik({
    initialValues: {
      users_permissions_user: 0,
      isSold: false,
      description: "",
      brand: "",
      category: 0,
      color: "",
      status: "",
      isOfferable: false,
      price: 0,
      name: "",
    },
    validationSchema: AddProductValidation,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        console.log(images);
        values.users_permissions_user = userId;

        const data = values;

        console.log(JSON.stringify(data));
        console.log(formik.category);
        formData.append("files.image", images[0]);
        if (formData.getAll("files.image") === undefined) {
          alert("Lütfen bir resim seçiniz");
          return;
        }
        formData.append("data", JSON.stringify(data));

        console.log(images[0]);

        const response = await api.AddProduct(formData);

        if (response.status == 200) {
          const notify = () => {
            toast.success("Ürün ekleme işlemi başarılı", {
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
          setImages(null);
          // remove all text from input
          formik.setFieldValue("name", "");
          formik.setFieldValue("price", 0);
          formik.setFieldValue("description", "");
          formik.setFieldValue("brand", "");
          formik.setFieldValue("category", 0);
          formik.setFieldValue("color", "");
          formik.setFieldValue("status", "");
          formik.setFieldValue("isOfferable", false);
        }

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(formik.errors);

  return (
    <div className={PageStyle.Container}>
      <Navbar />
      <div className={PageStyle.CardContainer}>
        <div className={PageStyle.Content}>
          <form onSubmit={formik.handleSubmit} style={{ display: "contents" }}>
            <div className={PageStyle.Left}>
              <div className={PageStyle.Header}>Ürün Detayları</div>

              <div className={PageStyle.ProductName}>
                <label>Ürün Adı</label>
                <input
                  placeholder="Örnek:Iphone 12 Pro Max"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className={PageStyle.Error}>{formik.errors.name}</div>
                ) : null}
              </div>

              <div className={PageStyle.ProductInfo}>
                <label>Ürün Bilgisi</label>
                <textarea
                  placeholder="Ürün Açıklaması girin"
                  type="text"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                {formik.errors.description && formik.touched.description ? (
                  <div className={PageStyle.Error}>
                    {formik.errors.description}
                  </div>
                ) : null}
              </div>
              <div className={PageStyle.CategoryAndBrandContainer}>
                <div className={PageStyle.Category}>
                  <label>Kategori</label>
                  <select id="categorySelect" name="category" onChange={formik.handleChange}>
                    <option value="">Kategori Seçiniz</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category?.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {formik.errors.category && formik.touched.category ? (
                    <div className={PageStyle.Error}>
                      {formik.errors.category}
                    </div>
                  ) : null}
                </div>
                <div className={PageStyle.Brand}>
                  <label>Marka</label>
                  <select name="brand" onChange={formik.handleChange}>
                    <option value="">Marka Seçiniz</option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand?.name}>
                        {brand.name}
                      </option>
                    ))}
                  </select>
                  {formik.errors.brand && formik.touched.brand ? (
                    <div className={PageStyle.Error}>{formik.errors.brand}</div>
                  ) : null}
                </div>
              </div>
              <div className={PageStyle.ColorAndOtherContainer}>
                <div className={PageStyle.Color}>
                  <label>Renk</label>
                  <select name="color" onChange={formik.handleChange}>
                    <option value="">Renk Seçiniz</option>
                    {colors.map((color) => (
                      <option key={color.id} value={formik?.values.color?.name}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                  {formik.errors.color && formik.touched.color ? (
                    <div className={PageStyle.Error}>{formik.errors.color}</div>
                  ) : null}
                </div>
                <div className={PageStyle.KullanimDurumu}>
                  <label>Kullanım Durumu</label>
                  <select name="status" onChange={formik.handleChange}>
                    <option value="">Kullanım Durumu Seçiniz</option>
                    {usingStatus.map((usingStatus) => (
                      <option
                        key={usingStatus.id}
                        value={formik?.values.status?.name}
                      >
                        {usingStatus.name}
                      </option>
                    ))}
                  </select>
                  {formik.errors.status && formik.touched.status ? (
                    <div className={PageStyle.Error}>
                      {formik.errors.status}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={PageStyle.PriceContainer}>
                <label>Fiyat</label>
                <input
                  className={PageStyle.PriceInput}
                  placeholder="Bir fiyat girin"
                  type="number"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
                {formik.errors.price && formik.touched.price ? (
                  <div className={PageStyle.Error}>{formik.errors.price}</div>
                ) : null}
                <div className={PageStyle.BidOption}>
                  <span>Teklif opsiyonu</span>
                  <label className={PageStyle.Toggle}>
                    <input
                      type="checkbox"
                      name="isOfferable"
                      onChange={formik.handleChange}
                      value={formik.values.isOfferable}
                    />
                    <span className={PageStyle.Slider}></span>
                  </label>
                </div>
              </div>
            </div>
            <div className={PageStyle.Right}>
              <div className={PageStyle.RightHeader}>Ürün Görseli</div>
              {images ? (
                <div className={PageStyle.ImagePreviewContainer}>
                  {" "}
                  <ImagePreview file={images[0]} />
                  <div
                    className={PageStyle.CancelIcon}
                    onClick={() => setImages(null)}
                  >
                    <CancelIcon></CancelIcon>
                  </div>
                </div>
              ) : (
                <DropZone setImages={setImages} />
              )}

              <div className={PageStyle.SubmitProductButton}>
                <button className={PageStyle.SaveButton} type="submit">
                  Kaydet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductUpload;
