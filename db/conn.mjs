import 'dotenv/config.js'
import { MongoClient } from 'mongodb';


const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;   
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
// we are now connected to the cluster on MongoDb 

let db = conn.db("Adopt"); //choosing Adopt as the database 

export default  db;