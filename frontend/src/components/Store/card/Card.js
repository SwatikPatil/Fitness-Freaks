import React from 'react'
import Styles from './Card.module.css'
import pic from '../../../images/temp/temp.png'

const Card = (props)=>{

    const {
        item
    } = props;


    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.imgContainer}>
                <img src={item.img}/>
            </div>
            <div className={Styles.details}>
                <h3>{item.name}</h3>
                <h5>{item.type}</h5>
                <h6>{item.ctn}</h6>
                <h4>{item.price}</h4>
            </div>

        </div>
    )
}

export default Card