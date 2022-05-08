const Router = require('express').Router();
const predietplan = require('../models/predietplan.model');

Router.route('/add').post((req, res) => {
    const {
        dietPlan,
        type,
        sort,
        times
    } = req.body;
    const plan = new predietplan({
        dietPlan,
        type,
        sort,
        times
    });
    plan.save()
        .then(() => res.json("diet Added"))
        .catch((err) => res.status(404).json("error =>" + err))

});

Router.route('/').post((req,res)=>{
    const {
        type,
        sort,
        times
    } = req.body;

    console.log(req.body)
    predietplan.findOne({"type":type,"sort":sort,"times":times})
        .then(result=>res.json(result))  
})

module.exports = Router;


