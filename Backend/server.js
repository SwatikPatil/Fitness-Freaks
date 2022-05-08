const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

mongoose.connection.once('open', () => {
    console.log("mongodb connected");
})


const User = require('./routes/users')
// const userdetails = require('./routes/userdata')
const plan = require('./routes/dietplan')
const workoutplan = require('./routes/workout')
const preplan = require('./routes/predietplan') 
const preworkout = require('./routes/preworkout') 
// const workout = require('./routes/workoutplan.rout')

app.use('/user', User)
// app.use('/userprofile', userdetails)
app.use('/dietplan', plan)
app.use('/workoutplan', workoutplan)
app.use('/predietplan', preplan)
app.use('/preworkout', preworkout)
// app.use('/workout', workout)

app.listen(port, () => {
    console.log("server running on port :-" + port);
});
