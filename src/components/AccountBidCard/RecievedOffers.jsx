/**Dependencies */
import React,{useState,useEffect} from 'react'

/**Style */
import AccountBidCardStyle from '../../styles/AccountBidCardStyle/AccountBidCardStyle.module.css'

/**Image */
import undefinedProduct from '../../img/undefinedProduct.jpg'

/**Services */
import api from '../../services/api';

function RecievedOffers({recievedOffers}) {
    console.log(recievedOffers)
    const [recievedOffersProduct,setRecievedOffersProduct] = useState([]);
    useEffect(() => {
        
        const fetchData = async () => {
            const response =await api.GetProductById(recievedOffers.product);
            setRecievedOffersProduct(response)
        };
        fetchData();
    }, [])
    console.log(recievedOffersProduct)

    const handleAccept = async()=>{
       try {
        const response = await api.UpdateOffer(recievedOffers.id
            ,{isStatus:true});
            console.log(response)
       } catch (error) {
           console.log(error)
       }

    }
    const handleReject = async()=>{
       try {
        const response = await api.UpdateOffer(recievedOffers.id
            ,{isStatus:false});
            console.log(response)
       } catch (error) {
           console.log(error)
       }
    }

  return (
    <div className={AccountBidCardStyle.Container}>
        <div className={AccountBidCardStyle.ImgAndınfo}>
            <div className={AccountBidCardStyle.ImageContainer}>
                <img src={recievedOffersProduct.image == null ? undefinedProduct:`https://bootcamp.akbolat.net/${recievedOffersProduct.image?.formats?.small?.url}` } 
                className={AccountBidCardStyle.Image} />
                </div>
            <div className={AccountBidCardStyle.InfoContainer}>
                <div className={AccountBidCardStyle.Name}>{recievedOffersProduct.name}</div>
                <div className={AccountBidCardStyle.BidContainer}>
                    <span className={AccountBidCardStyle.Text}>Alınan Teklif:</span>
                    <span className={AccountBidCardStyle.Bid}>{recievedOffers.offerPrice}</span>
                </div>
                </div>
        </div>
        <div className={AccountBidCardStyle.ButtonGroup}>
        
                {recievedOffers.isStatus == true &&  <span className={AccountBidCardStyle.Accepted}>Onaylandı</span>} 
                {recievedOffers.isStatus == false && <span className={AccountBidCardStyle.Rejected}>Reddedildi</span> }
                {
                    recievedOffers.isStatus == null && <>
                    <span className={AccountBidCardStyle.Accept} onClick={() => handleAccept()}>Onayla</span>
                    <span className={AccountBidCardStyle.Reject} onClick={() => handleReject()}>Reddet</span>
                    </>
                }
                
            
            
        </div>

    </div>
  )
}

export default RecievedOffers