const User = require("../models/userModels")
const bcrypt = require('bcrypt');
const saltRounds = 10;


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

  


const addUser = async (req, res) => {
  try {
// 1. Get data from request body
    const data = req.body;

    const password = req.body.password
    const hash = bcrypt.hashSync(password, saltRounds);
// Store hash in your password DB.

    
// 2. Create a new User document
    const user = new User( {
      ...data,
      password: hash
    });
    
// 3. Save the document to the database
    await user.save();
    
    // 4. Send the saved document as a response
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;

    // Find the user by id and update with new data
    const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by id and delete
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
}