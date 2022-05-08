const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;
const userdata = new Schema({
    username: { type: String, required: true },
    phoneno: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
    waterCount: {type:Number, required: true },
},
    {
        timestamps: true,
    });

userdata.pre('save', async function (next) {
    //console.log('hi');
    if (this.isDirectModified('password' || 'cpassword')) {

        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
        //console.log(this.password);
    }
    next()

});
const User = mongoose.model('userdata', userdata);
module.exports = User;