require('dotenv').config()


const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const articleRoutes = require('./routes/articleRoutes')
const authorRoutes = require('./routes/authorRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express()
const port = process.env.PORT || 3000;





app.use(cors(
  {
    credentials: true,
    origin: "http://localhost:5173",
      
    
  }
));

app.use(express.json());


//. Read cookies 

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/articles', articleRoutes);

app.use('/authors', authorRoutes);

app.use ('/users' , userRoutes);

app.use ( '/auth' , authRoutes);






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(() => console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}