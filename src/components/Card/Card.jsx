import React from 'react'
import CardStyle from '../../styles/CardStyle/CardStyle.module.css'
function Card() {
  return (
    <div className={CardStyle.Container}>
        <div className={CardStyle.Image}></div>
        <div className={CardStyle.Middle}>
            <div className={CardStyle.Brand}>Lev'is</div>
            <div className={CardStyle.ColorContainer}>
            <span className={CardStyle.ColorHeader}>Renk:</span>
            <span className={CardStyle.Color}>Lacivert</span>
            </div>

        </div>
        <div className={CardStyle.Price}>1.999,00 TL</div>

    </div>
  )
}

export default Card