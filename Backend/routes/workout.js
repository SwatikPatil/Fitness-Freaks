const Router = require('express').Router();
const workoutplan = require('../models/workout.model');

Router.route('/add').post((req, res) => {
    const {
        uid,
        workoutPlan,
    } = req.body;
    const plan = new workoutplan({
        uid,
        workoutPlan

    });
    plan.save()
        .then(() => res.json("workout Added"))
        .catch((err) => res.status(404).json("error =>" + err))

});

Router.route('/:id').get((req,res)=>{
    const id = req.params.id;

    workoutplan.findOne({"uid":id})
        .then(result=>res.json(result))  
})


Router.route('/update/:id').post((req, res) => {
    const id = req.params.id;
    workoutplan.replaceOne({"uid":id}, req.body)
        .then(()=>res.json("updated"))
        .catch(err => res.status(400).json('Error: ' + err));

});
module.exports = Router;


