require('dotenv').config()


import { connect } from 'mongoose';
import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import articleRoutes from './routes/articleRoutes';
import authorRoutes from './routes/authorRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express()
const port = process.env.PORT || 3000;





app.use(cors(
  {
    credentials: true,
    origin: "http://localhost:5173",
      
    
  }
));

app.use(json());
//. Read cookies 
app.use(cookieParser());



app.use('/articles', articleRoutes);

app.use('/authors', authorRoutes);

app.use ('/users' , userRoutes);

app.use ( '/auth' , authRoutes);






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(() => console.log("connected")).catch(err => console.log(err));

async function main() {
  await connect(process.env.DB_URL);
}