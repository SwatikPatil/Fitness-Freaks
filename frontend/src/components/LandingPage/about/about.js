import React from 'react'
import './about.css'
import card1 from '../../../images/fitness.png'
import card2 from '../../../images/plan.png'
import card3 from '../../../images/shopping-cart.png'
import card4 from '../../../images/medition/Meditation.png'
// import bglogo from '../../../images/dumbbell2.png'

function About() {
    return (
        <div className="about">
            {/* <img className="bg" src={bglogo} alt="" /> */}
            <div>
                <h1 className="about-h"> Know About Fitify</h1>
                <p className="about-p">A one-stop destination, a fitness-based online platform designed to address the overall health of an Individual. The company's foundation tends to the idea of preventive medical care through a blend of commitment, training, and conveyance by offering administrations for mental health, quality food, and wellness through its versatile application, empowering clients to deal with their sound way of life on a solitary stage.
                    “ The body achieves what the mind believes.”</p>
            </div>
            <div className="d-flex">
                <div class="card card1"><img className="fitness" src={card1} alt="" /><h1 className="h1-about">Workout</h1></div>
                <div class="card card2"><img className="plan" src={card2} alt="" /><h1 className="h1-about">Nutrition</h1></div>
                <div class="card card3"><img className="shoping-cart" src={card3} alt="" /><h1 className="h1-about">Shop</h1></div>
                <div class="card card4"><img className="coin" src={card4} alt="" /><h1 className="h1-about" style={{ "marginLeft": "-1.5vw", "width": "15vw" }}>Maditation</h1></div>
            </div>

        </div>
    )
}

export default About
