const express = require('express')
const { signup, Login, verify, logout } = require('../controllers/authControllers')
const router = express.Router()


//. 1. Route for signup
router.post('/signup' , signup)

//. 2. Route for Login
router.post('/login' , Login);


//.3. Route for verify
router.get ('./verify' , verify);

//.4. Route for logout
router.get ('./logout' , logout)

module.exports = router;