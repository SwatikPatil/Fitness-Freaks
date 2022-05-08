import React from 'react';
// import map from './images/map.png'
import './contactus.css'
import mail from '../../../images/mail.png'
import phone from '../../../images/phone.png'
import makrer from '../../../images/marker.png'
import map from '../../../images/map.png'
// import location from '../images/location.png'

function Contactus() {
    return (
        <div className="contactus">
            <div className="full">
                <div className="address">
                    <div className="d-flex">
                        <img className="marker icon" src={makrer} alt="" />
                        <p className="para marker-p">SRM UNIVERSITY KATTANKALATHUR CHENNAI,TN.</p>
                        <img className="phone icon" src={phone} alt="" />
                        <p className="para phone-p">+91 0987654321</p>
                        <img className="mail icon" src={mail} alt="" />
                        <p className="para mail-p">fitify@gmail.com</p>


                    </div>
                    <img className="map" src={map} alt=""></img>
                    <div className="location d-flex">
                        <img className="mar" src={makrer} alt="" />
                        <p className="cp"> Potheri,SRM Nagar,Kattankulathur,Tamil Nadu 603203, Located in: Annexure Campus</p>


                    </div>
                </div>
                <div className="cntus">
                    <h1 className="contact">Contact us</h1>
                    <form className="form">
                        <input type="textbox" className="input" placeholder="Your Name"></input>
                        <input type="textbox" className="input" placeholder="Your Email"></input>
                        <input type="textbox" className="input" placeholder="subject"></input>
                        <textarea className="input" placeholder="Message" />
                        <button className="btn" >Submit</button>
                    </form>

                </div>


            </div>

        </div>
    )
}

export default Contactus
