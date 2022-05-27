/**Dependencies */
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import clsx from 'clsx';

/**Style */
import ClotheTypeStyle from '../../styles/ClotheTypeStyle/ClotheTypeStyle.module.css';
/**services */
import api from '../../services/api';




function ClotheTypes() {
  
    const [clotheTypes,setClotheTypes] = useState([]);
    const [selectedClotheType,setSelectedClotheType] = useState('');

    const styleblue = {
     
      
      color: '#4B9CE2',
      borderBottom: '1px solid  #4B9CE2'
      
    }
 
    useEffect(() => {
     setSelectedClotheType('Hepsi')
      const fetchData = async () => {
        const response = await api.GetCategories(); 
        response.data.unshift({
          id:0,
          name:'Hepsi'
        }
          )  
        console.log(response.data)
        setClotheTypes(response.data);    
      }
    
      fetchData();
    }, [])

      const handleClick =(clotheType) => {
        setSelectedClotheType(clotheType);
      }
 
  return (
    <div className={ClotheTypeStyle.Container}>
        {
            clotheTypes.map((clotheType, index) => {
                return (
                    
                      <Link to={`/${clotheType.name}`} key={index}>
                        <div className={ClotheTypeStyle.ClotheTypeName}
                         onClick={()=>handleClick(clotheType.name)}
                         style={clotheType.name === selectedClotheType  ? styleblue : null}
                         >{clotheType.name}</div>
                      </Link>
                )
            })
        }
    </div>
  )
}

export default ClotheTypes