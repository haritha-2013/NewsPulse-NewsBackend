const Article =  require('../models/articleModels');




const getAllArticles = async(req, res) => {
    const articles = await Article.find(req.body);
    
     res.json(articles)
}

const getArticleById = async(req, res)=>{
        //.1. Find author by ID
        const article = await Article.findById(req.params.articleId)  


    res.json(article)
}

const addNewArticle = async (req, res)=>{

    const article = new Article(req.body)

    await article.save()
    res.json(article)
}

const updateArticle =  async(req,res)=>{

    const updatedArticle = await Article.findByIdAndUpdate(req.params.articleId,req.body,{new:true})
    
    res.save(updatedArticle)
}

const deleteArticle = async (req,res)=>{

    const deletedArticle = await Article.findByIdAndDelete(req.params.articleId) 
    res.json(deletedArticle)
}
  module.exports = {getAllArticles,
    getArticleById,
    addNewArticle,
    updateArticle,
    deleteArticle}