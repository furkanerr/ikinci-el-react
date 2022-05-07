/**Dependencies */
import React from 'react'
import { Link } from 'react-router-dom';

/**Style */
import CardStyle from '../../styles/CardStyle/CardStyle.module.css'

/**Icon */
import undefinedProduct from '../../img/undefinedProduct.jpg'

function Card({product}) {
  let liraConvert = Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
});

  return (
    
    <div className={CardStyle.Container}>
      <Link to={`/productdetail/${product.id}`}>
        <div className={CardStyle.Image}>
          <img className={CardStyle.ProductImage} src={product.image?.formats?.small==null ? undefinedProduct 
            : `https://bootcamp.akbolat.net/${product.image?.formats?.small?.url}`}/>
          
        </div>
        <div className={CardStyle.Middle}>
            <div className={CardStyle.Brand}>{product.brand}</div>
            <div className={CardStyle.ColorContainer}>
            <span className={CardStyle.ColorHeader}>Renk:</span>
            <span className={CardStyle.Color}>{product.color}</span>
            </div>

        </div>
        <div className={CardStyle.Price}>{liraConvert.format(product.price)}</div>
        </Link>
    </div>
     
  )
}

export default Card