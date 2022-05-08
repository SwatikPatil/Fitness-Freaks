import React, { useEffect, useState } from 'react'
import Styles from '../NutritionPage/Nutrition.module.css'
import Navbar from '../NavBar/Navbar'
import Progress from '../common/progress/Progress'
import food1 from '../../images/nutrition/foodpic.png'
import food2 from '../../images/nutrition/foodpic1.png'
import water from '../../images/keyfeatures/water.png'
import shop from '../../images/keyfeatures/shopping-cart.png'
import Diet from './Diet/Diet'
import ChangePlan from './ChangePlan/ChangePlan'
import { Redirect, Route, Switch } from 'react-router-dom'
import axios from 'axios'

const Nutrition = (props) => {

    const { auth } = props;


    const [diet, setDiet] = useState([]);
    const [nextMeal, setNextmeal] = useState({});

    useEffect(() => {

        axios.get(`https://fitifyy.herokuapp.com/dietplan/${auth}`)
            .then(res => {
                if (res.data) {
                    setDiet(res.data.dietPlan);
                } else {
                    setDiet(null);
                }
            })


        // var fdb = {
        //     diet:[
        //         {food:"bread and butter", cal:"20", status:true},
        //         {food:"egg", cal:"20", status:true},
        //         {food:"rice", cal:"20", status:true},
        //         {food:"brown bread", cal:"20", status:false},
        //         {food:"milk", cal:"20", status:false},
        //         {food:"chapati", cal:"20", status:false},
        //     ]
        // }
        // setDiet(fdb.diet);
    }, [])



    useEffect(async () => {
        //console.log(diet);
        console.log(diet)
        if (diet) {
            for (var a = 0; a < diet.length; a++) {
                if (diet[a].status === false) {
                    await setNextmeal(diet[a]);
                    break;
                }
            }
        }
    }, [diet])


    //useEffect(()=>{console.log(nextMeal)},[nextMeal])



    const save = () => {
        const form = {
            "uid": auth,
            "dietPlan": diet
        }

        axios.post(`https://fitifyy.herokuapp.com/dietplan/update/${auth}`, form)
            .then(res => {
                window.alert(res.data)
            })

    }








    return (
        <div className={Styles.majorContainer}>
            <Navbar />
            <Switch>
                <Route exact path="/nutrition/">
                    {
                        (diet) ?
                            <div className={Styles.main}>
                                <div className={Styles.info}>
                                    <Progress />
                                    <div className={Styles.mealNav}>
                                        <div className={Styles.mealPlan}>
                                            <div>
                                                <img src={food1} />
                                            </div>
                                            <div>
                                                <h3>Today's Meal Plan</h3>

                                            </div>
                                        </div>
                                        <div className={Styles.mealPlan}>
                                            <div>
                                                <img src={food2} />
                                            </div>
                                            <div>
                                                <h3>Next Meal</h3>
                                                <h4>{nextMeal.food}</h4>

                                            </div>
                                        </div>

                                    </div>
                                    <div className={Styles.mealNav}>
                                        <div className={Styles.water}>
                                            <div className={Styles.img}>
                                                <img src={water} />
                                            </div>
                                            <div className={Styles.details}>
                                                <h3>Glasses of water taken</h3>
                                                <h4>3/14 Glasses</h4>
                                            </div>
                                        </div>
                                        <div className={Styles.mealPlan}>
                                            <div className={Styles.img}>
                                                <img src={shop} />
                                            </div>
                                            <div>
                                                <h3>Shop for Ingredients</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.diet}>
                                    <Diet diet={diet} setDiet={setDiet} save={save} />
                                </div>
                            </div> :
                            <Redirect to="/nutrition/change" />
                    }
                </Route>
                <Route path="/nutrition/change">
                    <ChangePlan auth={auth} setDiet={setDiet} diet={diet} />
                </Route>
            </Switch>
        </div>
    )
}

export default Nutrition