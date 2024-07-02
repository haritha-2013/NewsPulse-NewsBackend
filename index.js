require('dotenv').config()


const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const articleRoutes = require('./routes/articleRoutes')
const authorRoutes = require('./routes/authorRoutes')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(cors())

app.use('/articles', articleRoutes)

app.use('/authors', authorRoutes)






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(() => console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}