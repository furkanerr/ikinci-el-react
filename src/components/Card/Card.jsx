import React from 'react'
import CardStyle from '../../styles/CardStyle/CardStyle.module.css'
import ProductImage  from '../../img/Image 5.png'
function Card({product}) {
  let liraConvert = Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
});
  return (
    <div className={CardStyle.Container}>
        <div className={CardStyle.Image}>
          <img className={CardStyle.ProductImage} src={`https://bootcamp.akbolat.net/${product.image?.formats?.small?.url}`}/>
        </div>
        <div className={CardStyle.Middle}>
            <div className={CardStyle.Brand}>{product.brand}</div>
            <div className={CardStyle.ColorContainer}>
            <span className={CardStyle.ColorHeader}>Renk:</span>
            <span className={CardStyle.Color}>{product.color}</span>
            </div>

        </div>
        <div className={CardStyle.Price}>{liraConvert.format(product.price)}</div>

    </div>
  )
}

export default Card