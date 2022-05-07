/**Dependencies */
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

/**Style */
import ClotheTypeStyle from '../../styles/ClotheTypeStyle/ClotheTypeStyle.module.css';
/**services */
import api from '../../services/api';


function ClotheTypes() {
  
    const [clotheTypes,setClotheTypes] = useState([]);

    useEffect(() => {
     
      const fetchData = async () => {
        const response = await api.GetCategories();   
        setClotheTypes(response.data);    
      }
    
      fetchData();
    }, [])

     const handleClick = (name) => {
    //   fetchDataByCategory(name);
    //   console.log(name) 
     }



  
  return (
    <div className={ClotheTypeStyle.Container}>
        {
            clotheTypes.map((clotheType, index) => {
                return (
                    
                      <Link to={`/${clotheType.name}`} key={index}>
                        <div className={ClotheTypeStyle.ClotheTypeName} onClick={()=>handleClick(clotheType.name)} >{clotheType.name}</div>
                      </Link>
                )
            })
        }
    </div>
  )
}

export default ClotheTypes