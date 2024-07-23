const User = require("../models/userModels");
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ _id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

  
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none' 
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const Login = async(req,res) => {

  //. 1. Get data from request body
    const data = req.body
  
    //. 2. Check for user with given email in database
   const user = await User.findOne({ email: data.email }).exec();

   if (!user) {
    return res.status(401).send('Invalid email or password');
}


  //. 3. Check password agaist password in database

  const passwordMatch = bcrypt.compare (data.password, user.password) 
    // result == true

  //. 4. Login

  if (passwordMatch) {
    const token = jwt.sign(
      { _id: user._id, email: user.email }, 
      JWT_SECRET , {expiresIn : "1h"});
    
      res.cookie('token', token, {
         httpOnly: true ,
        secure: true,
        sameSite : "none"});
      return res.send("Logged In");
    } else {
      return res.status(401).send("Unauthorized access !!! Wrong password");
    }
  };

 

  const logout = async (req, res) => {
    res.cookie('token' , '' , 
      {expires : new Date(0),
      httpOnly: true ,
      secure : true,
      sameSite : 'none'
    })
    res.send("Logged Out Successfully !!!")
  }

  const verifyLogin = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).send("Unauthorized Access!");
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      res.json({ message: "Logged In", user: decoded });
    } catch (error) {
      console.error('Error in verifying token:', error);
      res.status(401).send("Unauthorized Access!");
    }
  };
  
  module.exports = {
    signup,
    Login,
    verifyLogin,
    logout
  };