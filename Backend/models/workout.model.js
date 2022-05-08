const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workout = new Schema({
    workout: { type: String, required: true },
    cal: { type: Number, required: true },
})

const workoutplan = new Schema({
    uid : {type:String, required: true},
    workoutPlan: { type: [workout], required: true }
}, {
    timestamps: true
})

const workoutplanmodel = mongoose.model('workoutplan', workoutplan);

module.exports = workoutplanmodel;