const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workout = new Schema({
    workout: { type: String, required: true },
    cal: { type: Number, required: true },
})

const preworkoutplan = new Schema({
    type: { type: String, required: true },
    diff: { type: String, required: true },
    workoutPlan: { type: [workout], required: true }
}, {
    timestamps: true
})

const preworkoutplanmodel = mongoose.model('preworkoutplan', preworkoutplan);

module.exports = preworkoutplanmodel;