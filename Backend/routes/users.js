const router = require('express').Router();
let User = require('../models/user.model');
var bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

router.route('/signin').post(async (req, res) => {
    const { email, password } = req.body;


    try {
        if (!password || !email) {
            return res.status(404).json({ message: 'enter all details' })

        }
        const existingUser = await User.findOne({ email: email })
        // console.log(existingUser);

        if (existingUser) {
            const isPassCorrect = await bcrypt.compare(password, existingUser.password);
            // console.log(isPassCorrect);

            if (!isPassCorrect) {
                return res.json("password is incorrect");
            }
            else {
                res.json({status:"you are signed in", uid:existingUser._id});
            }
        } else { res.json("invalid user") }

        // res.status(404).json({ message: "user exists" })
    }

    // console.log('passward is: ' + existingUser.password)

    //     // const token = jwt.sign({ email: existingUser.email, name: existingUser.name }, 'test',)
    //     res.status(200).json({ result: existingUser, })

    catch (error) {
        res.status(404).json({ message: "Something went wrong" + error })
    }


})
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ` + err));

});
router.route('/signup').post(async (req, res) => {
    // const name = req.body.name;
    const { username, phoneno, email, password, cpassword } = req.body;
    const existingUser = await User.findOne({ email: email });
    const waterCount = 0;

    if (existingUser) {
        res.json('user already exists');
        // console.log(existingUser);

    }
    else {
        if (password !== cpassword) {
            res.status(500).json('cpassword and password are not same');
        }
        else {
            const newUser = new User({
                username,
                phoneno,
                email,
                password,
                cpassword,
                waterCount,
            });
            newUser.save()
                .then(() => res.json('user added'))
                .catch(err => res.status(400).json('Error: ' + err));
        }
    }
})


module.exports = router;