/**Dependencies */
import React,{useEffect} from 'react'

/**Style */
import AccountBidCardStyle from '../../styles/AccountBidCardStyle/AccountBidCardStyle.module.css'

/**Services */
import api from '../../services/api'

/**Image */
import undefinedProduct from '../../img/undefinedProduct.jpg'

/**Context */
import {useAuth} from '../../context/authContext'

/**Toastify */
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()  
function MyOfferCard({offer}) {

   
    const {user} = useAuth()

useEffect(() => {
 
 
}, [])
const handleBuy =  async ()=>{
  try {
     const response = await api.UpdateProduct(offer?.product.id,{
        users_permissions_user:user.data.id,
          isSold:true
      })
      if( response.status==200){
        const notify = () => {
          
            toast.success("Satın alındı",
           {
               style:{backgroundColor:'  #F1FFF0',color:'#46AF32'},
            
            autoClose: 3000,
            draggable: false,
            newestOnTop: true,
            position: "top-right",
            closeButton: false,
            progressBar: false,
            pauseOnHover: false,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "colored"
           }
                );
        }
        notify();
    }
          console.log(response)
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className={AccountBidCardStyle.Container}>
        <div className={AccountBidCardStyle.ImgAndınfo}>
            <div className={AccountBidCardStyle.ImageContainer}>
                <img src={offer.product?.image?.formats?.small==null ? undefinedProduct : `https://bootcamp.akbolat.net/${offer.product.image?.formats?.small?.url}`} className={AccountBidCardStyle.Image} />
                </div>
            <div className={AccountBidCardStyle.InfoContainer}>
                <div className={AccountBidCardStyle.Name}>{offer.product?.name}</div>
                <div className={AccountBidCardStyle.BidContainer}>
                    <span className={AccountBidCardStyle.Text}>Verilen Teklif:</span>
                    <span className={AccountBidCardStyle.Bid}>{offer?.offerPrice}</span>
                </div>
                </div>
        </div>
        <div className={AccountBidCardStyle.ButtonGroup}>
          {
            offer?.isStatus == true && offer?.product?.users_permissions_user == user.data.id && offer?.isSold == true &&
            <span className={AccountBidCardStyle.Accepted}>Satın Alındı</span> 
            
          }
          {
            offer?.isStatus == false && <span className={AccountBidCardStyle.Rejected}>Reddedildi</span>
          }
          {
            offer?.isStatus == null && <span className={AccountBidCardStyle.Accept}>Beklemede</span>
          }
            
          {
            offer?.isStatus == true && offer?.product.isSold == null && <span className={AccountBidCardStyle.Accept} 
            onClick={() => handleBuy()}
            >Satın Al</span>
          }
        </div>

    </div>
  )
}

export default MyOfferCard