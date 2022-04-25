import React from 'react'
import ClotheTypeStyle from '../../styles/ClotheTypeStyle/ClotheTypeStyle.module.css'
function ClotheTypes() {
    let clotheTypes = ['Hepsi', 'Pantolon', 'Gömlek', 'Tişört', 'Şort', 
    'Kazak', 'Polar','Mont','Abiye','Ayakkabı','Sweatshirt','Aksesurar','Çanta','Triko','Diğer']
       

  return (
    <div className={ClotheTypeStyle.Container}>
        {
            clotheTypes.map((clotheType, index) => {
                return (
                    
                        <div className={ClotheTypeStyle.ClotheTypeName} key={index}>{clotheType}</div>
                    
                )
            })
        }
    </div>
  )
}

export default ClotheTypes