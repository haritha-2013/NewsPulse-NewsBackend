const Article =  require('../models/articleModels');




const getAllArticles = async(req, res) => {
    try {
        const articles = await Article.find();
    
        res.json(articles);
    }
    
 catch (error) {
    console.error('fetching articles:' , error);
    res.status(500).json({error:'internal Server Error'});
}
};


const getArticleById = async(req, res)=>{
        //.1. Find author by ID
        try {
            const article = await Article.findById(req.params.articleId);
            if (!article) {
                return res.status(404).json({ error: 'Article not found' });
            }
            res.json(article);
        } catch (error) {
            console.error('Error fetching article by ID:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

const addNewArticle = async (req, res)=>{

    try {
        const article = new Article(req.body);
        await article.save();
        res.json(article);
    } catch (error) {
        console.error('Error adding new article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const updateArticle =  async(req,res)=>{
    try {
        const updatedArticle = await Article.findByIdAndUpdate(req.params.articleId, req.body, { new: true });
        if (!updatedArticle) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.json(updatedArticle);
    } catch (error) {
        console.error('Error updating article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteArticle = async (req,res)=>{

    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.articleId);
        if (!deletedArticle) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.send("deleted");
    } catch (error) {
        console.error('Error deleting article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
 
module.exports = {getAllArticles,
    getArticleById,
    addNewArticle,
    updateArticle,
    deleteArticle}