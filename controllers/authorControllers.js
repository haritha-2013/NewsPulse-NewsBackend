const Author = require('../models/authorModels')

const getAllAuthors = async(req,res)=>{
    //.1. Find all authors
    const authors = await Author.find({});
    
     res.json(authors)
}

const getAuthorById = async(req,res)=>{
    //.1. Find author by ID
    const author = await Author.findById(req.params.authorId)  
        res.json(author)
}




const addNewAuthor = async (req,res)=>{

    //.1. Create a document using authorSchema
    const author = new Author(req.body)
   

    //.2. Save the document to the database
    await author.save()
    
   res.json(author)}


const updateAuthor = async(req,res)=>{
    //.1. Update author by ID
const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorId, req.body,{new: true})
    res.json(updatedAuthor)
}

const deleteAuthor = async (req,res)=>{

    const deletedAuthor = await Author.findByIdAndDelete(req.params.authorId) 
    res.json(deletedAuthor)
}

module.exports = {getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthor,
    deleteAuthor}