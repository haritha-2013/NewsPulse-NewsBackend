const Author = require('../models/authorModels')



const getAllAuthors = async(req,res)=>{
    //.1. Find all authors
    
        try {
            const author = await Author.find();
        
            res.json(author);
        }
        
     catch (error) {
        console.error('fetching articles:' , error);
        res.status(500).json({error:'internal Server Error'});
    }
};
    

const getAuthorById= async(req, res)=>{
    //.1. Find author by ID
    try {
        const author= await Author.findById(req.params.authorId);
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }
        res.json(author);
    } catch (error) {
        console.error('Error fetching article by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const addNewAuthor = async (req,res)=>{

    try {
        const author = new Author(req.body);
        await author.save();
        res.json(author);
    } catch (error) {
        console.error('Error adding new article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateAuthor =  async(req,res)=>{
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorId, req.body, { new: true });
        if (!updatedAuthor) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.json(updatedAuthor);
    } catch (error) {
        console.error('Error updating article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const deleteAuthor = async (req,res)=>{

    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.authorId);
        if (!deletedAuthor) {
            return res.status(404).json({ error: 'Author not found' });
        }
        res.send("deleted");
    } catch (error) {
        console.error('Error deleting article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = {getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthor,
    deleteAuthor};