import express from 'express'
import 'dotenv/config.js'
import mongoose from 'mongoose'

//import routes
 import routerHome from './routes/homeRoutes.js';
 import routerComment from './routes/commentRoutes.js';
//  import routerUser from './routes/userRoutes.js';



// middleware 
const app = express();
const PORT = 5000;

app.use(express.json());

// Connect to Mongoose.
// You must specify the database you want to connect to in /conn strg.
// This defaults to the "test" database.
 await mongoose.connect(process.env.ATLAS_URI);




 app.use('/home', routerHome);
 app.use('/comment', routerComment);
//  app.use('/user', routerHome);

app.get("/", (req, res) => {
    res.send("Welcome to the Homes API.");
  });


  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
  });