import React, { useState } from 'react'

import Styles from './card.module.css'
import trainer1 from '../../images/trainer/trainer1.png'
import trainer2 from '../../images/trainer/trainer2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

function Card() {
    const [Trainer, setTrainer] = useState(
        [
            {
                "Avtar": trainer2,
                "Name": "Rashmi Roy",
                "Details": "Cardio Trainer/Nutrionist",
                "Fees": "₹1500/month",
                "rating": 4

            },
            {
                "Avtar": trainer1,
                "Name": "Samar Singh",
                "Details": "Cardio Trainer/Nutrionist",
                "Fees": "₹2000/month",
                "rating": 5

            },
            {
                "Avtar": trainer1,
                "Name": "Raju Chadda",
                "Details": "Cardio Trainer/Nutrionist",
                "Fees": "₹1500/month",
                "rating": 4

            },
            {
                "Avtar": trainer2,
                "Name": "Surya Singh",
                "Details": "Cardio Trainer/Nutrionist",
                "Fees": "₹1000/month",
                "rating": 3

            },


        ])
    return (
        Trainer.map(train =>

            <div className={Styles.trainerCard}>
                <img src={train.Avtar} alt="trainer img" />
                <div className={Styles.fullDetails}>
                    <div className={Styles.details}>
                        <h1>{train.Name}</h1>
                        <h6>{train.Details}</h6>
                    </div>
                    <div className={Styles.details}>
                        <h1 className={Styles.Fees}>{train.Fees}</h1>
                        <div className={Styles.rating}>
                            <FontAwesomeIcon icon={faStar} className={train.rating >= 1 ? Styles.iconYellow : Styles.iconGrey} />
                            <FontAwesomeIcon icon={faStar} className={train.rating >= 2 ? Styles.iconYellow : Styles.iconGrey} />
                            <FontAwesomeIcon icon={faStar} className={train.rating >= 3 ? Styles.iconYellow : Styles.iconGrey} />
                            <FontAwesomeIcon icon={faStar} className={train.rating >= 4 ? Styles.iconYellow : Styles.iconGrey} />
                            <FontAwesomeIcon icon={faStar} className={train.rating >= 5 ? Styles.iconYellow : Styles.iconGrey} />
                            <h6>{train.rating}/5</h6>
                        </div>
                    </div>

                    <div className={Styles.button}>
                        <button className={Styles.btn} style={{ "background": "#49C016" }}>Get Trial</button>
                        <Link to="/trainerdetails"><button className={Styles.btn}>Know more</button></Link>
                    </div>
                </div>



            </div>
        )

    )
}

export default Card
