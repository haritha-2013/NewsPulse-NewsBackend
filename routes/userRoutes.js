const express = require('express')
const { getAllUsers,
        getUserById,
        addUser,
        updateUser,
        deleteUser
 } = require('../controllers/userControllers')
const router = express.Router()

//1. Get all user
router.get('/', getAllUsers)

//2. Get anuser byId
router.get('/:userId',getUserById)

//3. Add a new user
router.post('/' , addUser)

//4. Update an user
router.patch('/:userId',updateUser)

//5. Delete an user
router.delete('/:userId', deleteUser)


module.exports = router