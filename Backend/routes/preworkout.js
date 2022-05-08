const Router = require('express').Router();
const preworkourplan = require('../models/preworkout.model');

Router.route('/add').post((req, res) => {
    const {
        workoutPlan,
        type,
        diff
    } = req.body;
    console.log(req.body)
    const plan = new preworkourplan({
        workoutPlan,
        type,
        diff
    });
    plan.save()
        .then(() => res.json("workout Added"))
        .catch((err) => res.status(404).json("error =>" + err))

});

Router.route('/').post((req,res)=>{
    const {
        type,
        diff
    } = req.body;

    console.log(req.body)
    preworkourplan.findOne({"type":type,"diff":diff})
        .then(result=>res.json(result))  
})

module.exports = Router;


