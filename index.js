const mongoose = require('mongoose');
const express = require('express')
const articleRoutes = require('./routes/articleRoutes')
const authorRoutes = require('./routes/authorRoutes')
const app = express()
const port = 3000

app.use('/articles', articleRoutes)

app.use('/author', authorRoutes)






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(() => console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://harithaabhilash2013:MUyFvtAHW1drKQym@cluster0.lwnddes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}