import React, { useEffect, useState } from 'react'
import Styles from './Progress.module.css'

const Progress = () =>{

    const [calBurnt, setCalBurnt] = useState();
    const [calConsumed, setCalConsumed] = useState();
    const [calBurntper, setCalBurntper] = useState();
    const [calConsumedper, setCalConsumedper] = useState();
    const [bal, setBal] = useState();

    useEffect(()=>{
        var fdb = {
            brn:300,
            consumed:900,
            targetBurn:600,
            targetConsume:900,
        }

        setCalBurnt(fdb.brn)
        setCalConsumed(fdb.consumed)
        setCalBurntper(((fdb.brn/fdb.targetBurn)*100))
        setCalConsumedper(((fdb.consumed/fdb.targetConsume)*100))
        setBal(fdb.consumed - fdb.brn)
    },[])




    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.header}>
                <span className={Styles.dashhead}>Today's Progress</span>
                <span className={Styles.leaderboard}><b>6/62</b>in leaderboards</span>
            </div>
            <div className={Styles.progressviewer}>
                <div className={Styles.num}>
                    <div id={Styles.burnt}>
                        <span>
                            Total Calories burnt
                        </span>
                        <h2>
                            {calBurnt}
                        </h2>
                    </div>
                    <div id={Styles.balance}>
                        <h4>
                            {bal}
                        </h4>
                        <span>
                            Balanced
                        </span>
                    </div>
                    <div id={Styles.consumed}>
                        <span>
                            Total<br/>Calories Consumed
                        </span>
                        <h2>
                            {calConsumed}
                        </h2>
                    </div>
                </div>
                <div className={Styles.bar}>
                    <div className={Styles.cons}>
                        <div className={Styles.prg}>
                            <div id={Styles.a} style={{"width":`${calBurntper}%`,}}></div>
                        </div>
                        <div className={Styles.cpt}>
                            <div>Calories Consumed</div>
                            <div>211 kcal</div>
                        </div>
                    </div>
                    <div className={Styles.cons}>
                        <div className={Styles.prg}>
                            <div id={Styles.b} style={{"width":`${calConsumedper}%`,}}></div>
                        </div>
                        <div className={Styles.cpt}>
                            <div>Calories Consumed</div>
                            <div>225 kcal</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Progress