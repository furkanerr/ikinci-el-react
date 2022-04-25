import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomePageStyle from "../../styles/HomePageStyle/HomePageStyle.module.css";
import Card from "../../components/Card/Card";
import ClotheTypes from "../../components/ClotheType/ClotheTypes";
import Banner from '../../img/Banner1.png'
function HomePage() {
  return (
    <div className={HomePageStyle.Container}>
      <Navbar />

      <div className={HomePageStyle.Content}>
       
        <div className={HomePageStyle.Banner}>
          <img  className={HomePageStyle.BannerImage} src={Banner}/>
          </div>
        
          <ClotheTypes/>
        
      </div>
      <div className={HomePageStyle.CardContainer}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default HomePage;
