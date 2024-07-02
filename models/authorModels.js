const mongoose = require('mongoose');

//.1.Schema
const authorSchema = new mongoose.Schema({
    name: String,
    place: String,
    language: String,
    description: String,
    thumbnail: String

  });



  

//.2. Models

const Author = mongoose.model('Author', authorSchema);

module.exports = Author