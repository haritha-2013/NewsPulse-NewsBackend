const mongoose = require('mongoose');

//.1.Schema
const articleSchema = new mongoose.Schema({
    name : String,
    language : String,
   articles: String
    

  });



  

//.2. Models

const Article = mongoose.model('Article', articleSchema);

module.exports = Article