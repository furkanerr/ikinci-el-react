import React,{useState} from "react";
import ProductDetailStyle from "../../styles/ProductDetailPageStyle/ProductDetailPageStyle.module.css";
import ProductImage from "../../img/Image 5.png";
import Navbar from "../../components/Navbar/Navbar";
import BidModal from "../../components/BidModal/BidModal";
function ProductDetailPage() {
  const [bidModal, setBidModal] = useState(false);

  const toggleBidModal = () => {
    setBidModal(!bidModal);
  };
  return (
 
    <div className={ProductDetailStyle.Container}>
      <Navbar />
      <div className={ProductDetailStyle.ProductDetailCard}>
        {
          bidModal ? (<div className={ProductDetailStyle.Modal}>
            
            <BidModal toggleModal={toggleBidModal} isOpen={bidModal}/>
    
          </div>
          ) : null

        }
        
        <div className={ProductDetailStyle.ImageContainer}>
          <img src={ProductImage} className={ProductDetailStyle.Image} />
        </div>
        <div className={ProductDetailStyle.InfoContainer}>
        <div className={ProductDetailStyle.Name}>Beli Uzun Trençkot Kareli</div>
        <div className={ProductDetailStyle.Price}>319,99 TL</div>
        <div className={ProductDetailStyle.ProductDetailContainer}>
          <div className={ProductDetailStyle.Headers}>
            <div className={ProductDetailStyle.BrandHeader}>Marka:</div>
            <div className={ProductDetailStyle.ColorHeader}>Renk:</div>
            <div className={ProductDetailStyle.KullanimDurumuHeader}>
              Kullanım Durumu:
            </div>
          </div>
          <div className={ProductDetailStyle.ProductsInfos}>
            <div className={ProductDetailStyle.Brand}>Lusi Viton</div>
            <div className={ProductDetailStyle.Color}>Bej Rengi</div>
            <div className={ProductDetailStyle.KullanimDurumu}>
              Az Kullanılmış
            </div>
          </div>
        </div>
        <div className={ProductDetailStyle.Info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique vel arcu elementum eleifend. Donec eu nibh nunc. Praesent
          justo mi, maximus vel consequat nec, auctor vel arcu.
        </div>
      </div>
      </div>
      <div className={ProductDetailStyle.ButtonGroup}>
        <div className={ProductDetailStyle.BuyButton}>Satın Al</div>
        <div className={ProductDetailStyle.BidButton} onClick={toggleBidModal}>Teklif Ver</div>
      </div>
    </div>
  
  );
}

export default ProductDetailPage;
