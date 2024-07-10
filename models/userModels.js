const mongoose = require("mongoose");
//.1.Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
  },
  

  );

const User = mongoose.model("User", userSchema);

module.exports = User;