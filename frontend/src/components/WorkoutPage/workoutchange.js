import React, { useState, useEffect } from 'react'
import Styles from './ChangeworkoutPlan.module.css'
import card1 from '../../images/workout/running.png'
import axios from 'axios'

const ChangeworkoutPlan = (props) => {

    const { auth } = props;

    const [type, setType] = useState("weighttrain");
    const [diff, setDiff] = useState("easy");
    const [done, setDone] = useState(false)
    const [workout, setWorkout] = useState([])

    const s = {
        border: "2px solid #5a64c5",
        color: "#5a64c5"
    }
    const f = {
        border: "2px solid #bcb5b5",
        color: "#000"
    }

    useEffect(
        async () => {
            await axios.get(`https://fitifyy.herokuapp.com/workoutplan/${auth}`)
                .then(res => {
                    setWorkout(res.data);
                })
        }, []
    )


    useEffect(() => { console.log(workout) }, [workout])

    const createPlan = async () => {
        const form = {
            "type": type,
            "diff": diff
        }
        console.log(form)
        var workoutplan = null;
        await axios.post("https://fitifyy.herokuapp.com/preworkout/", form)
            .then(res => {
                workoutplan = res.data.workoutPlan;
                console.log(workoutplan)
            })

        const form1 = {
            "uid": auth,
            "workoutPlan": workoutplan
        }
        console.log(form1)

        await axios.post("https://fitifyy.herokuapp.com/workoutplan/add", form1)
            .then(res => {
                window.alert(res.data);
                window.location = "/workout"
            })


        //  await axios.get(`http://localhost:5000/dietplan/${auth}`)
        //     .then(res=>{
        //         if(res.data){
        //             setDiet(res.data.dietPlan);                
        //         }else{
        //             setDiet(null);
        //         }
        //     })
        setDone(true);
    }

    const updatePlan = async () => {
        const form = {
            "type": type,
            "diff": diff
        }
        console.log(form)
        var workoutplan = null;
        await axios.post("https://fitifyy.herokuapp.com/preworkout/", form)
            .then(res => {
                workoutplan = res.data.workoutPlan;
                console.log(workoutplan)
            })

        const form1 = {
            "uid": auth,
            "workoutPlan": workoutplan
        }
        console.log(form1)

        await axios.post(`https://fitifyy.herokuapp.com/workoutplan/update/${auth}`, form1)
            .then(res => {
                window.alert(res.data);
                window.location = "/workout"
            })


        //  await axios.get(`http://localhost:5000/dietplan/${auth}`)
        //     .then(res=>{
        //         if(res.data){
        //             setDiet(res.data.dietPlan);                
        //         }else{
        //             setDiet(null);
        //         }
        //     })
        setDone(true);
    }



    return (
        <div className={Styles.majorContainer}>
            <div className={Styles.Header}>
                <h3>Select A Workout Plan</h3>
            </div>
            <div className={Styles.main}>
                <div className={Styles.type}>
                    <div className={Styles.head}>
                        <h3>1.Workout Type</h3>
                    </div>
                    <div className={Styles.cardCtn}>
                        <div className={Styles.card} style={(type.localeCompare("weighttrain") === 0) ? { "backgroundColor": "#1F2024" } : { "backgroundColor": "#5a64c5" }} onClick={() => { setType("weighttrain") }}>
                            <img src={card1} />
                            <h3>Weight Training</h3>
                        </div>
                        <div className={Styles.card} style={(type.localeCompare("noequip") === 0) ? { "backgroundColor": "#1F2024" } : { "backgroundColor": "#5a64c5" }} onClick={() => { setType("noequip") }}>
                            <img src={card1} />
                            <h3>No Equipment Cardio</h3>
                        </div>
                        <div className={Styles.card} style={(type.localeCompare("sprint") === 0) ? { "backgroundColor": "#1F2024" } : { "backgroundColor": "#5a64c5" }} onClick={() => { setType("sprint") }}>
                            <img src={card1} />
                            <h3>Sprint & Feild Exercises</h3>
                        </div>
                    </div>
                </div>
                <div className={Styles.filter}>
                    <div className={Styles.list}>
                        <div className={Styles.head}>
                            <h3>2.Difficulty</h3>
                        </div>
                        <div className={Styles.item} style={(diff.localeCompare("easy") === 0) ? s : f} onClick={() => { setDiff("easy") }}>
                            <h3>Begginer</h3>
                        </div>
                        <div className={Styles.item} style={(diff.localeCompare("inter") === 0) ? s : f} onClick={() => { setDiff("inter") }}>
                            <h3>Intermediate</h3>
                        </div>
                        <div className={Styles.item} style={(diff.localeCompare("hard") === 0) ? s : f} onClick={() => { setDiff("hard") }}>
                            <h3>Advanced</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.foot}>
                <div className={Styles.button}>
                    Custom plan
                </div>
                <div className={Styles.button} onClick={(workout) ? updatePlan : createPlan}>
                    create plan
                </div>
            </div>


        </div>
    )
}

export default ChangeworkoutPlan;