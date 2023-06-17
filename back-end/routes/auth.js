const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// create a user using: POST "api/auth/".doesn't require auth

router.post('/', [

    check('name', 'Enter valid name').isLength({ min: 3 }),
    check('email', 'Enter valid email').isEmail(),
    check('password', 'password must be 5 characters').isLength({ min: 5 })

], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
      }).then(user => res.json(user))
      .catch(err => {console.log(err)
        res.json({error:"Please enter unique value for mail",message:err.message})
    })
    
})

module.exports = router