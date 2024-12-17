import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config.js'

//import router
 import routerHome from './routes/homeRoutes.js';

 await mongoose.connect(process.env.ATLAS_URI);

// middleware 
const PORT = 5000;
const app = express();

app.use(express.json());

// Connect to Mongoose.
// You must specify the database you want to connect to in /conn strg.
// This defaults to the "test" database.



 app.use('/home', routerHome);

app.get("/", (req, res) => {
    res.send("Welcome to the Homes API.");
  });


  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
  });