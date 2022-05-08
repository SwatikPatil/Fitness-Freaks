const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const food = new Schema({
    food: { type: String, required: true },
    cal: { type: Number, required: true },
})

const predietplan = new Schema({
    type: { type: String, required: true },
    sort: { type: String, required: true },
    times: { type: Number, require: true },
    dietPlan: { type: [food], required: true }
}, {
    timestamps: true
})

const predietplanmodel = mongoose.model('predietplan', predietplan);

module.exports = predietplanmodel;