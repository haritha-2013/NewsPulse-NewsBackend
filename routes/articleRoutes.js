const express = require('express')
const { getAllArticles, getArticleById, addNewArticle, updateAuthor, deleteAuthor, updateArticle, deleteArticle } = require('../controllers/articlesControllers')
const router = express.Router()

//1. Get all articles
router.get('/', getAllArticles)

//2. Get an article byId
router.get('/:articleById',getArticleById)

//3. Add a new article
router.post('/' , addNewArticle)

//4. Update an article 
router.patch('/:articleById',updateArticle)

//5. Delete an article
router.delete('/:articleById', deleteArticle)


module.exports = router