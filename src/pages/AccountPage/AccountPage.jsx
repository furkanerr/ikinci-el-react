/**Dependencies */
import React,{useState,useEffect} from "react";

/**Components */
import RecievedOffers from "../../components/AccountBidCard/RecievedOffers";
import MyOfferCard from "../../components/AccountBidCard/MyOfferCard";
import Navbar from "../../components/Navbar/Navbar";
/**Style */
import AccountStyle from "../../styles/AccountStyle/AccountStyle.module.css";
/**Context */
import { useAuth } from "../../context/authContext";
/**Services */
import api from '../../services/api';
/**Image */
import Profile from '../../img/Group 6876.png'

function AccountPage() {
  const [aldiklarimButtonStyle,setaldiklarimButtonStyle] = useState(true);
  const [verdiklerimButtonStyle,setVerdiklerimButtonStyle] = useState(false);
  const [recievedOffers,setRecievedOffers] = useState([]);
  const [myOffers,setMyOffers] = useState([]);
  const [recievedOffersProduct,setRecievedOffersProduct] = useState([]);
  const {logOut,loggedIn,user} = useAuth();
  
  const handleClick = async()=>{
    setaldiklarimButtonStyle(!aldiklarimButtonStyle);
    setVerdiklerimButtonStyle(!verdiklerimButtonStyle);

  }

  useEffect(() => {
    const fetchData = async () => {
      const MyOffers = await api.GetOffers(user?.data?.id);
      const MyProducts = await api.GetUsersProduct(user?.data?.id);
      
      setRecievedOffersProduct(MyProducts.data);
      // create recieved offers array and add all the offers that are inside of MyProducts 
      const recievedOffers = MyProducts.data.map(product => {
        return product.offers.map(offer => {
          return offer;
        });
      });
      // flatten the array
      const flatRecievedOffers = [].concat.apply([], recievedOffers);
      // remove duplicates
      const uniqueRecievedOffers = [...new Set(flatRecievedOffers)];
      
      // sort the uniqueRecievedOffers by offerPrice
      const sortedRecievedOffers = uniqueRecievedOffers.sort((a, b) => {
        return a.offerPrice - b.offerPrice;
      });
      // add the sortedRecievedOffers to the state
      setRecievedOffers(sortedRecievedOffers);
      setMyOffers(MyOffers.data);
      console.log(MyProducts)
   
    };
 
    fetchData();

  }, [])
  
  const handleSignOut = () => {
    logOut();
  }
  
console.log(recievedOffers);
console.log(myOffers);
  return (
    <div className={AccountStyle.Container}>
      <Navbar />
      <div className={AccountStyle.CardContainer}>
      <div className={AccountStyle.Header}>
        <div className={AccountStyle.ProfilePicture}>
          <img src={Profile} className={AccountStyle.Picture}/>
          <div className={AccountStyle.Email}>
          <p>{user?.data?.email}</p>
        </div>
        </div>
       
        <div className={AccountStyle.SignOut} onClick={()=>handleSignOut()}>Çıkış Yap</div>
      </div>
     
      <div className={AccountStyle.Content}>
        <div className={AccountStyle.ContentHeader}>
            <span className={AccountStyle.TeklifAldiklarim} onClick={handleClick} style={aldiklarimButtonStyle===true ?
            {color:'#4B9CE2',borderColor:'#4B9CE2'}:null}>Teklif Aldıklarım</span>
            <span className={AccountStyle.TeklifVerdiklerim} onClick={handleClick} style={verdiklerimButtonStyle === true ?
            {color:'#4B9CE2',borderColor:'#4B9CE2'}:null}>Teklif Verdiklerim</span>
            </div>

            {
              aldiklarimButtonStyle === true ?
              <div className={AccountStyle.ContentBody}>
                {
                  recievedOffers.length === 0 ?
                  <div className={AccountStyle.NoOffers}>
                    <p>Henüz teklif almış olduğunuz ürün yok</p>
                  </div>
                  :
                  recievedOffers.map(offer => {
                    return <RecievedOffers recievedOffers={offer}  />
                  })
                }

           
        </div>: <div className={AccountStyle.ContentBody}>
         {
            myOffers.length === 0 ?
            <div className={AccountStyle.NoOffers}>
              <p>Henüz teklif vermediniz</p>
            </div>:
            
              myOffers.map(offer => (
                 <MyOfferCard offer={offer}/>
                ))
            

         }
        </div>
            }
        
       
      </div>
      </div>
    </div>
  );
}

export default AccountPage;
