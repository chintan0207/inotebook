const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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

 try{

 

   let user = await User.findOne({email:req.body.email});
   if (user){
    return res.status(400).json({error:"sorry user with this email already exists"})
   } 

   //create new user
   user= await User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
      })
      
    
    res.json(user)
 } 
 //catch the errors
 catch(error){
    console.error(error.message);
    res.status(500).send("some error occurred")

 }
})

module.exports = router