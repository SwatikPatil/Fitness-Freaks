const Router = require('express').Router();
const dietplan = require('../models/dietplan.model');

Router.route('/add').post((req, res) => {
    const {
        uid,
        dietPlan,
    } = req.body;
    const plan = new dietplan({
        uid,
        dietPlan

    });
    plan.save()
        .then(() => res.json("diet Added"))
        .catch((err) => res.status(404).json("error =>" + err))

});

Router.route('/:id').get((req,res)=>{
    const id = req.params.id;

    dietplan.findOne({"uid":id})
        .then(result=>res.json(result))  
})


Router.route('/update/:id').post((req, res) => {
    const id = req.params.id;
    dietplan.replaceOne({"uid":id}, req.body)
        .then(()=>res.json("updated"))
        .catch(err => res.status(400).json('Error: ' + err));

});
module.exports = Router;


