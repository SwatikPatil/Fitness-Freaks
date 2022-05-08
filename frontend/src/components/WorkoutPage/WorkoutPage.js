import React, { useEffect, useState } from 'react'
import Styles from './Workout.module.css';
import Navbar from '../NavBar/Navbar';
import waightLifting from '../../images/workout/waightLifting.png';
import sprinting from '../../images/workout/running.png';
import stretching from '../../images/workout/stretching.png'
import longarmstretch from '../../images/workout/longarmstretch.png'
import highKicks from '../../images/workout/highKicks.png'
import skipping from '../../images/workout/skipping.png'
import Progress from '../common/progress/Progress'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

const Workout = (props) => {


    const { auth } = props;

    const [workout, setWorkout] = useState([]);

    useEffect(
        () => {
            axios.get(`https://fitifyy.herokuapp.com/workoutplan/${auth}`)
                .then(res => {
                    if (res.data) {

                        setWorkout(res.data.workoutPlan);
                    } else {
                        setWorkout(null)
                    }
                })
        }, []
    )

    useEffect(() => { console.log(workout) }, [workout])




    if (!workout) {
        return (
            <Redirect to="/workoutplan" />
        )
    }
    return (
        <div className={Styles.majorContainer}>
            <Navbar />
            <div className={Styles.container}>

                <div className={Styles.progress}>
                    <Progress />

                    <div className={Styles.workoutProgress}>

                        <div className={Styles.workouts1}>
                            <img className={Styles.progressImg} src={waightLifting} alt="waightLifting" />
                            <div>
                                <h6 className={Styles.progressH6}>Start<br /> Today’s Workout</h6>
                                <p className={Styles.para}>1/2 Completed</p>
                            </div>

                        </div>
                        <div className={Styles.workouts1}>
                            <img className={Styles.progressImg} src={sprinting} alt="sprinting" />
                            <div>
                                <h6 className={Styles.progressH6}>Start<br /> Sprint Running</h6>
                                <p className={Styles.para}>3.2/6 km Completed</p>
                            </div>

                        </div>

                    </div>
                    <div className={Styles.workoutProgress}>

                        <div className={Styles.workouts1}>
                            <img className={Styles.progressImg} src={waightLifting} alt="waightLifting" />
                            <div>
                                <h6 className={Styles.progressH6}>Start<br /> Today’s Workout</h6>
                                <p className={Styles.para}>1/2 Completed</p>
                            </div>

                        </div>
                        <div className={Styles.workouts1}>
                            <img className={Styles.progressImg} src={sprinting} alt="sprinting" />
                            <div>
                                <h6 className={Styles.progressH6}>Start<br /> Sprint Running</h6>
                                <p className={Styles.para}>3.2/6 km Completed</p>
                            </div>

                        </div>

                    </div>
                </div>

                <hr className={Styles.hr} />


                <div className={Styles.Box}>
                    <h1 className={Styles.workoutsListHead}>Workout</h1>
                    <button className={Styles.startWorkout} ><Link className={Styles.a} to="/workoutgoing">Start Workout</Link></button>
                    <button className={Styles.startWorkout} ><Link className={Styles.a} to="/workoutplan">Change Workout</Link></button>
                    {
                        workout &&

                        workout.map((res, index) => (

                            <div className={Styles.WorkoutList} key={index}>
                                <img className={Styles.WorkoutImg} src={stretching} alt="stretching" />
                                <h1 className={Styles.WorkoutName}>{res.workout}</h1>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div >
    )
}

export default Workout