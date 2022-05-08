import React from 'react';
import Navbar from '../NavBar/Navbar'
import Styles from './trainer.module.css'


import Card from './card';

function Trainer() {
    return (

        <div className={Styles.majorContainer}>
            <Navbar />

            <div className={Styles.container}>
                <h1 className={Styles.heading}>Select Your Trainer</h1>
                {/* <img className={Styles.bg} src={bglogo} /> */}
                <Card />
            </div>
        </div>



    )
}

export default Trainer
