
import React, { useState, useEffect } from 'react';
import Styles from './signup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPhone, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


function Signup(props) {
    const [Username, setUsername] = useState("")
    const [phoneno, setphoneno] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")

    // useEffect(() => {
    //     console.log(User)
    // }, [User])

    const { setAuth } = props;




    const Submit = async (e) => {
        e.preventDefault();
        var details = {
            username: Username,
            email: email,
            phoneno: phoneno,
            password: password,
            cpassword: cpassword
        }
        //console.log(details)
        await axios.post('https://fitifyy.herokuapp.com/user/signup', details)
            .then(res => {
                window.alert(res.data)
            });

        const logindetails = {
            email: email,
            password: password
        }
        //console.log(logindetails)
        await axios.post('https://fitifyy.herokuapp.com/user/signin', logindetails)
            .then(res => {
                if (res.data.uid) {
                    Cookies.set('user', res.data.uid)
                    setAuth(res.data.uid)
                }
            });


    }



    return (
        <div className={Styles.main}>
            <div className={Styles.container}>

                <h1>Signup</h1>
                <form className={Styles.fom}>
                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faUser} className={Styles.contact} />
                        <input className={Styles.input} type="textfield" placeholder="Enter Full Name"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }} />

                    </div>
                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faPhone} className={Styles.contact} />
                        <input className={Styles.input} type="number" placeholder="Phone no"
                            onChange={(e) => {
                                setphoneno(e.target.value)
                            }} />
                    </div>

                    <div className={Styles.cnt1}>
                        <FontAwesomeIcon icon={faVoicemail} className={Styles.contact} />
                        <input className={Styles.input} type="textfield" placeholder="Email" onChange={(e) => {
                            setemail(e.target.value)
                        }} />
                    </div>

                    <div className={Styles.cnt} >
                        <FontAwesomeIcon icon={faLock} className={Styles.contact} />
                        <input className={Styles.input} type="password" placeholder="Password" onChange={(e) => {
                            setpassword(e.target.value)
                        }} />
                    </div>

                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faLock} className={Styles.contact} />
                        <input className={Styles.input} type="password" placeholder="Conform Password" onChange={(e) => {
                            setcpassword(e.target.value)
                        }} />
                    </div>

                    <div className={Styles.bbttnn} onClick={Submit}><button>Signup</button></div>
                    <h6>Already Have Account? <Link to="/login"><span>Log In</span></Link></h6>
                </form>


            </div>
        </div >
    )
}

export default Signup
