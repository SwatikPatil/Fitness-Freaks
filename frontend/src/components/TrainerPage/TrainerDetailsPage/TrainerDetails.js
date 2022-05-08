import React from 'react'
import Navbar from "../../NavBar/Navbar";
import Styles from "./trainerDetails.module.css";
import trainer from '../../../images/trainer/trainer1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import plank from '../../../images/trainer/damo/plank.png'

function TrainerDetails() {
    return (
        <div class={Styles.majorContainer}>
            <Navbar />
            <div className={Styles.container}>
                <h1 className={Styles.heading}>About Trainer</h1>
                <div className={Styles.main}>
                    <div className={Styles.fulldetails}>
                        <img src={trainer} />
                        <div className={Styles.details}>
                            <h1>Raju Chadda</h1>
                            <h6>Cardio Trainer/Nutrionist</h6>
                            <p>₹1200/month</p>
                            <div className={Styles.stars}>
                                <FontAwesomeIcon icon={faStar} className={Styles.iconYellow} />
                                <FontAwesomeIcon icon={faStar} className={Styles.iconYellow} />
                                <FontAwesomeIcon icon={faStar} className={Styles.iconYellow} />
                                <FontAwesomeIcon icon={faStar} className={Styles.iconYellow} />
                                <FontAwesomeIcon icon={faStar} className={Styles.iconGrey} />
                                <p>4/5</p>
                            </div>
                            <p className={Styles.experience}>Experience: <span>5yrs</span></p>
                            <div className={Styles.button}>
                                <button className={Styles.btn} >Get Trial</button>
                                <button className={Styles.btn} style={{ "background": "#49C016", }}>Hire Trainer</button>
                            </div>

                        </div>
                    </div>
                    <p className={Styles.about}>Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 SE stays true to its OG roots while taking a fresh step forwards.
                        <br />
                        <br />
                        Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 SE stays true to its OG roots while taking a fresh step forwards. Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 SE stays true to its OG roots while taking a fresh step forwards.Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 SE stays true to its OG roots while taking a fresh step forwards.
                    </p>
                </div>
                <div className={Styles.tut}>
                    <h1 className={Styles.demo}>DEMO</h1>
                    <div style={{ "paddingTop": "1vh" }}>
                        <div className={Styles.cards}>
                            <div className={Styles.card}>
                                <img src={plank} alt="plank" />
                                <h3>How To Perform Perfect Plank?</h3>
                            </div>
                            <div className={Styles.card}>
                                <img src={plank} alt="plank" />
                                <h3>How To Perform Perfect Plank?</h3>
                            </div>
                        </div>
                        <div className={Styles.cards} style={{ "marginTop": "-2vh" }}>
                            <div className={Styles.card}>
                                <img src={plank} alt="plank" />
                                <h3>How To Perform Perfect Plank?</h3>
                            </div>
                            <div className={Styles.card}>
                                <img src={plank} alt="plank" />
                                <h3>How To Perform Perfect Plank?</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TrainerDetails
