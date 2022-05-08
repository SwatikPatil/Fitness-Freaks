const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const food = new Schema({
    food: { type: String, required: true },
    cal: { type: Number, required: true },
    status: { type: Boolean, require: true, default: false }
})

const dietplan = new Schema({
    uid: { type: String, required: true },
    dietPlan: { type: [food], required: true }
}, {
    timestamps: true
})

const dietplanmodel = mongoose.model('dietplan', dietplan);

module.exports = dietplanmodel;