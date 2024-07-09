const mongoose = require('mongoose');

//.1.Schema
const authorSchema = new mongoose.Schema({
  image: String,  
  name: String,
  bio: String
    

  });



  

//.2. Models

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;