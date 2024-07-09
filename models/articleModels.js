const mongoose = require('mongoose');

//.1.Schema
const articleSchema = new mongoose.Schema({
   
    title : String,
   image: String,
   description : String
    

  });



  

//.2. Models

const Article = mongoose.model('Article', articleSchema);

module.exports = Article