import React,{useEffect,useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomePageStyle from "../../styles/HomePageStyle/HomePageStyle.module.css";
import Card from "../../components/Card/Card";
import ClotheTypes from "../../components/ClotheType/ClotheTypes";
import Banner from '../../img/Banner1.png'
import api from '../../services/api'
import { useCategory } from "../../context/clotheCategoryContext";
function HomePage() {
  const {productsByCategory} = useCategory();
  const [products,setProducts] = useState([])
  useEffect(() => { 
     const fetchData = async () => {
      const response = await api.GetAllProducts();
      setProducts(response)
    }
     fetchData();
    console.log("çalıştı")

  }, [])

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
        {
          products?.map(product => (
            <Card key={product.id} product={product}/>  
            )) 
        }
     
      </div>
    </div>
  );
}

export default HomePage;
