const express = require('express')
const { getAllAuthors, getAuthorById, updateAuthor, deleteAuthor, addNewAuthor } = require('../controllers/authorControllers')
const router = express.Router()

//1. Get all author
router.get('/', getAllAuthors )

//2. Get author byId
router.get('/:authorById', getAuthorById)

//3. Add new author
router.post('/', addNewAuthor)

//4. Update an author
router.patch('/:authorById', updateAuthor)

//5. Delete an author
router.delete('/:authorById', deleteAuthor)


module.exports = router