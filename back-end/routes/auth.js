const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// create a user using: POST "api/auth/createuser".no login required

router.post('/createuser', [

    check('name', 'Enter valid name').isLength({ min: 3 }),
    check('email', 'Enter valid email').isEmail(),
    check('password', 'password must be 5 characters').isLength({ min: 5 })

], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Check whether user with their email exists already

    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry user with this email already exists" })
        }
        //secure password by bcryptjs salt

        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt)

        //create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        // return token

        const data = {
            user:{
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, "JWT_SECRET");
    
        res.json({authtoken})
    }
    //catch the errors
    catch (error) {
        console.error(error.message);
        res.status(500).send("some error occurred")

    }
})

module.exports = router