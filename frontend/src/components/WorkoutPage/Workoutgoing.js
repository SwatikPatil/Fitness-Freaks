import React, { useEffect, useState } from 'react';
import Styles from './workoutgoing.module.css'
import Navbar from '../NavBar/Navbar';
import stratching from '../../images/workout/stretching.png'

function Workoutgoing() {
    const [Playlist, setPlaylist] = useState("")
    // const onsubmit = () => {
    //     Playlist
    // }
    return (
        <div className={Styles.majorContainer}>
            <Navbar />
            <div className={Styles.main}>

                <div className={Styles.samulation}>
                    <h1 className={Styles.workout}>Workout</h1>
                    <h6 className={Styles.diff}>Advanced   20-30mins</h6>
                    <img className={Styles.img} src="https://i.pinimg.com/originals/48/d3/18/48d318b6fd069adf7fd5ad23bf3206f6.gif"></img>
                    <h4 className={Styles.exr}>Streching</h4>
                    <h2 className={Styles.exr}>5/10</h2>
                    <div className={Styles.prg}>

                        <div id={Styles.b} style={{ "width": "50%", }}></div>
                    </div>
                    <div>
                        <h2 className={Styles.exr}>2:20 <span className={Styles.min}>Min</span></h2>
                        <div >
                            <button className={Styles.btns}>Play</button>
                            <button className={Styles.btns}>Pause</button>
                        </div>
                        <iframe className={Styles.mobilePlayer} src="https://open.spotify.com/embed/playlist/62P8AD54InSsBml4iZUOW8" width="100%" height="10" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    </div>


                </div>
                <div className={Styles.playlist}>


                    <iframe src="https://open.spotify.com/embed/playlist/62P8AD54InSsBml4iZUOW8" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    <div>
                        <input class={Styles.imp} type="text" placeholder="Enter Your Spotify Playlist"
                        />
                        <button className={Styles.btns} >Add</button></div>
                </div>


            </div>
        </div >
    )
}

export default Workoutgoing
