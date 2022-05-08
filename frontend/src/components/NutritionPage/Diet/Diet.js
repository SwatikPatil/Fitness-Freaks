import React, { useEffect, useState } from 'react'
import Styles from './Diet.module.css'
import food1 from '../../../images/nutrition/food2.png'
import { Link } from 'react-router-dom'

const Diet=(props)=>{

    const { diet, setDiet, save } = props;


    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.header}>
                <h3>Nutrition Plan</h3>
                <div className={Styles.btnCtn}>
                    <Link to="/nutrition/change">
                        <span>Change Plan</span>
                    </Link>
                    <span onClick={save}>Save details</span>                
                </div>
            </div>
            <div className={Styles.foodList}>
                {
                    diet &&
                    diet.map((food,index)=>        
                            <div className={Styles.food} key={index}>
                                <div className={Styles.img}>
                                    <img src={food1} />
                                </div>
                                <div className={Styles.details}>
                                    <h3>{food.food}</h3>
                                    <h4>{food.cal}Kcal</h4> 
                                    <input onChange={e=>{
                                        let checked = e.target.checked;
                                        setDiet(
                                          diet.map((dat,ind) => {
                                            if (index === ind) {
                                              dat.status = checked;
                                            }
                                            return dat;
                                          })
                                        );
                                      }} type="checkbox" checked={food.status}/>                       
                                </div>                    
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Diet;