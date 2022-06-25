/**Dependencies */
import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";

/**Context */
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import ClotheTypes from "../../components/ClotheType/ClotheTypes";
import LoaderComponent from '../../components/Loader/LoaderComponent'

/**Icon */
import Banner from '../../img/Banner1.png'
/**Services */
import api from '../../services/api'

/**Style */
import HomePageStyle from "../../styles/HomePageStyle/HomePageStyle.module.css";
function HomePage() {
 
  const [products,setProducts] = useState([])
  const [limit,setLimit] = useState(10)
  const [offset,setOffset] = useState(0)
  const [IsLoading,setIsLoading] = useState(false)
  const {category} = useParams();


  // const handleScroll = () => {
  //   if (window.scrollY + window.innerHeight >= document.body.scrollHeight)
  //   {
  //    setOffset(offset+10)
  //   }
  // }

  useEffect(() => { 
     const fetchData = async () => {
     // debugger
      setIsLoading(true)
       if(category  && category !== 'Hepsi'){
        setProducts([])
        const response = await api.GetProductByCategory(category);
        setProducts(response[0].products);
        setIsLoading(false)
       }
       else{
        const response = await api.GetAllProducts(limit,offset);
        if(response?.length > 0){
        setProducts([...response]);
        }
        setIsLoading(false)
       }
     
    }
    // window.addEventListener('scroll', () => handleScroll());
    fetchData();
    console.log("çalıştı")


  }, [category,limit,offset])

  return (
    <div className={HomePageStyle.Container}>
      <Navbar />

      <div className={HomePageStyle.Content}>
     
        <div className={HomePageStyle.Banner}>
          <img  className={HomePageStyle.BannerImage} src={Banner}/>
          </div>
        
          <ClotheTypes/>
        
      </div>
    
    {
      IsLoading ? <div className={HomePageStyle.Loader}><LoaderComponent/></div> :
      <div className={HomePageStyle.CardContainer} >
        {
          products?.map(product => (
            <Card key={product.id} product={product}/>  
            ))
        }
      </div>
    }
       
        
     
     
      
    </div>
  );
}

export default HomePage;
