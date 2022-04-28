import React,{useState} from "react";
import AccountBidCard from "../../components/AccountBidCard/AccountBidCard";
import Navbar from "../../components/Navbar/Navbar";
import AccountStyle from "../../styles/AccountStyle/AccountStyle.module.css";

import Profile from '../../img/Image 5.png'
function AccountPage() {
  const [aldiklarimButtonStyle,setaldiklarimButtonStyle] = useState(true);
  const [verdiklerimButtonStyle,setVerdiklerimButtonStyle] = useState(false);
  const handleClick =()=>{
    setaldiklarimButtonStyle(!aldiklarimButtonStyle);
    setVerdiklerimButtonStyle(!verdiklerimButtonStyle);

  }
  return (
    <div className={AccountStyle.Container}>
      <Navbar />
      <div className={AccountStyle.CardContainer}>
      <div className={AccountStyle.Header}>
        <div className={AccountStyle.ProfilePicture}>
          <img src={Profile} className={AccountStyle.Picture}/>

        </div>
        <div className={AccountStyle.Email}>
          <p>furkan08_@hotmail.com </p>
        </div>
      </div>
      <div className={AccountStyle.Content}>
        <div className={AccountStyle.ContentHeader}>
            <span className={AccountStyle.TeklifAldiklarim} onClick={handleClick} style={aldiklarimButtonStyle===true ?
            {color:'#4B9CE2',borderColor:'#4B9CE2'}:null}>Teklif Aldıklarım</span>
            <span className={AccountStyle.TeklifVerdiklerim} onClick={handleClick} style={verdiklerimButtonStyle === true ?
            {color:'#4B9CE2',borderColor:'#4B9CE2'}:null}>Teklif Verdiklerim</span>
            </div>
        <div className={AccountStyle.ContentBody}>
          <AccountBidCard/>
          <AccountBidCard/>
          <AccountBidCard/>
          <AccountBidCard/>
    
        </div>
      </div>
      </div>
    </div>
  );
}

export default AccountPage;
