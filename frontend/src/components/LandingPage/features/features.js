import React from 'react'
import './feature.css'
import feature1 from '../../../images/nutrition.png'
import feature2 from '../../../images/workoutstraightplan.png'
import feature3 from '../../../images/ecommerceshop.png'
import feature4 from '../../../images/trainerSelection.png'


function Features() {
    return (
        <div className="feature">


            <div>
                <h1 className="feature-h"> Exciting Features </h1>
                <p className="feature-p">“Design is not just what it looks like and feels like. Design is how it works.”
                    The highlights, our exciting features, for example, online business, day-by-day diet, or exercise plans, online consultancy help you monitor your bit-by-bit progress and accomplish total serenity.</p>
            </div>
            <div className="d">
                <div class="one"><img className="pic" src={feature1} alt="" /></div>
                <div class="two"><img className="pic" src={feature2} alt="" /></div>
                <div class="one"><img className="pic" src={feature3} alt="" /></div>
                <div class="two"><img className="pic" src={feature4} alt="" /></div>
            </div>

        </div>

    )
}

export default Features
