import React,{useState,useEffect} from 'react'
import ClotheTypeStyle from '../../styles/ClotheTypeStyle/ClotheTypeStyle.module.css';
import api from '../../services/api';
import { useCategory } from '../../context/clotheCategoryContext';
function ClotheTypes() {
    // let clotheTypes = ['Hepsi', 'Pantolon', 'Gömlek', 'Tişört', 'Şort', 
    // 'Kazak', 'Polar','Mont','Abiye','Ayakkabı','Sweatshirt','Aksesurar','Çanta','Triko','Diğer']
    const {fetchDataByCategory} = useCategory();
    const [clotheTypes,setClotheTypes] = useState([]);

    useEffect(() => {
     
      const fetchData = async () => {
        const response = await api.GetCategories();
        
        setClotheTypes(response.data);
        
          
        
      }
      
      fetchData();
      
    }, [])

    const handleClick = (id) => {
    
      fetchDataByCategory(id);
      console.log(id)
     
    }



  
  return (
    <div className={ClotheTypeStyle.Container}>
        {
            clotheTypes.map((clotheType, index) => {
                return (
                    
                        <div className={ClotheTypeStyle.ClotheTypeName} onClick={()=>handleClick(clotheType.id)} key={index}>{clotheType.name}</div>
                    
                )
            })
        }
    </div>
  )
}

export default ClotheTypes