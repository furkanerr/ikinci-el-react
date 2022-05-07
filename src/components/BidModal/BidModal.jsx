/*Dependencies */
import { useFormik } from "formik";
import React, { useState } from "react";

/**Style */
import Modal from "../../styles/BidModalStyle/BidModalStyle.module.css";

/**Image */
import undefinedProduct from "../../img/undefinedProduct.jpg";

/**Context */
import { useAuth } from "../../context/authContext";

/**Services */
import api from "../../services/api";

/**Validations */
import BidValidation from "../../constants/Validations/BidValidation";


function BidModal({
  toggleModal,
  data,
  setdeneme
}) {
  let BidPercents = [20, 30, 40];

  const { user } = useAuth();
  const [isChecked, setIsChecked] = useState(false);

  const handleDisable = () => {
    setIsChecked(!true);
  };

  const formik = useFormik({
    initialValues: {
      offerPrice: 0,
    },
    validationSchema: BidValidation,
    onSubmit: async (values) => {
      try {
        const response = await api.MakeOffer({
          offerPrice: values.offerPrice,
          product: data?.id,
          users_permissions_user: user?.data?.id,
        });
        if (response.status === 200) {
          setdeneme(X=>X+1);
          console.log(response)
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className={Modal.Container}>
      <div className={Modal.Top}>
        <span className={Modal.BidText}>Teklif Ver</span>
        <span className={Modal.ExitIcon} onClick={toggleModal}>
          <span>x</span>
        </span>
      </div>
      <div className={Modal.Product}>
        <div className={Modal.ProductImgAndName}>
          <div className={Modal.ImgAndName}>
            <img
              src={
                data?.image?.formats?.medium == null
                  ? undefinedProduct
                  : `https://bootcamp.akbolat.net/${data.image?.formats?.medium?.url}`
              }
              alt=""
            />
            <span className={Modal.ProductName}>{data.name}</span>
          </div>
          <div className={Modal.ProductPrice}>
            <span className={Modal.ProductPrice}>{data.price} TL </span>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} style={{ display: "contents" }}>
        {BidPercents.map((percent, index) => {
          return (
            <div className={Modal.RadioButtons} key={index}>
              <input
                type="radio"
                name="offerPrice"
                id={`Radio${percent}`}
                checked={
                  formik.values.offerPrice == (data.price * percent) / 100
                }
                onClick={handleDisable}
                onChange={formik.handleChange}
                value={(data.price * percent) / 100}
              />
              <label
                for={`Radio${percent}`}
              >{`%${percent} Kadar Teklif Ver`}</label>
            </div>
          );
        })}
        <div className={Modal.Bid} onClick={handleDisable}>
          <input
            type="number"
            disabled={isChecked === true ? true : false}
            name="offerPrice"
            onChange={formik.handleChange}
            value={formik.values.bid}
            placeholder="Teklif Belirle"
          />
        </div>
        <button className={Modal.Button}>Onayla</button>
      </form>
    </div>
  );
}

export default BidModal;
