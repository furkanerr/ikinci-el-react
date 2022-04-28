import React from 'react'
import AccountBidCardStyle from '../../styles/AccountBidCardStyle/AccountBidCardStyle.module.css'
import ProductImg from '../../img/Image 5.png';
function AccountBidCard() {
  return (
    <div className={AccountBidCardStyle.Container}>
        <div className={AccountBidCardStyle.ImgAndınfo}>
            <div className={AccountBidCardStyle.ImageContainer}>
                <img src={ProductImg} className={AccountBidCardStyle.Image} />
                </div>
            <div className={AccountBidCardStyle.InfoContainer}>
                <div className={AccountBidCardStyle.Name}>Beli Uzun Trençkot Kareli</div>
                <div className={AccountBidCardStyle.BidContainer}>
                    <span className={AccountBidCardStyle.Text}>Teklif:</span>
                    <span className={AccountBidCardStyle.Bid}>199,99</span>
                </div>
                </div>
        </div>
        <div className={AccountBidCardStyle.ButtonGroup}>
            <span className={AccountBidCardStyle.Accept}>Onayla</span>
            <span className={AccountBidCardStyle.Reject}>Reddet</span>
        </div>

    </div>
  )
}

export default AccountBidCard