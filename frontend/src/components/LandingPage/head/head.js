import React from 'react'
import './head.css';
import logo from '../../../images/dumbbell.png'
import home from '../../../images/Home.png'
import image from '../../../images/image.png'
import workoutplan from '../../../images/workoutplan.png'
import coinsystem from '../../../images/coinsystem.png'
import ecommerce from '../../../images/ecommerce.png'
import { Link } from 'react-router-dom'


function head() {
    return (
        <div className="head">
            <div className="flex">
                <div>
                    <div className="logo-text">
                        <img className="logo" src={logo} alt="" />
                        <h1 className="fiti">Fiti<span className="fy">fy</span></h1>

                    </div>
                    <div className="d-flex">
                        <Link to="signup"><button className="signup">Sign Up</button></Link>
                        <Link to="login"><button className="login">Log In</button></Link>
                        <p>
                            An all in one app <br />that keeps you in shape.<br /><br />
                            Earn,Compete & Stay Fit With Friends
                        </p>
                    </div>
                </div>
                <div>

                </div>
                <div className="images">
                    <img className="workplan" src={workoutplan} alt="" />
                    <img className="home" src={home} alt="" />
                    <img className="image" src={image} alt="" />
                    <img className="ecommerce" src={ecommerce} alt="" />
                    <img className="coinsystem" src={coinsystem} alt="" />

                </div>


            </div>
        </div>
    )
}

export default head
