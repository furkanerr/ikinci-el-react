import React from "react";
import Modal from "../../styles/BidModalStyle/BidModalStyle.module.css";
import ProductImg from '../../img/Image 5.png'
function BidModal({toggleModal,isOpen}) {
    let BidPercents = [20,30,40]
  return (
    <div className={Modal.Container}>
        
      <div className={Modal.Top}>
        <span className={Modal.BidText}>Teklif Ver</span>
        <span className={Modal.ExitIcon} onClick={toggleModal}>
          <span >X</span>
        </span>
      </div>
      <div className={Modal.Product}>
          <div className={Modal.ProductImgAndName}>
               <div className={Modal.ImgAndName}> 
                   <img src={ProductImg} alt=""/>
                <span className={Modal.ProductName}>Pantolon</span></div>
                <div className={Modal.ProductPrice}>
            <span className={Modal.ProductPrice}>399,99</span>
            </div>
          </div>
            
      </div>
      {
        BidPercents.map((percent,index)=>{
            return(
                <div className={Modal.RadioButtons} key={index} >
        {" "}
        <input type="radio" value={percent} name={`checkbox`} />
        <label >{`%${percent} Kadar Teklif Ver`}</label>
      </div>
            )
            })
      }
      <div className={Modal.Bid}>
        <input type="number" placeholder="Teklif Belirle" />
      </div>
      <div className={Modal.Button}>Onayla</div>
      
    </div>
  );
}

export default BidModal;
