/*import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from "./route/book.route.js ";
import userRoute from "./route/user.route.js";
import path from 'path'

const app = express()
 
app.use(cors());
app.use(express.json());

dotenv.config()
const PORT = process.env.PORT||4000

const URI = process.env.MongoDBURI

//connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("Connected  to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

//Define Route 
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.use(express.static(path.join(__dirname,"../Frontend/dist")));
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"../Frontend/dist/index.html"));
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})



//MongoDBURI="mongodb://localhost:27017/bookStore"
//mongodb+srv://ujjwal:Ujjwal@123@bookstorecluster.tbam6qc.mongodb.net/bookstorecluster
*/

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const URI = process.env.MongoDBURI;

mongoose.connect(URI, {
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define Routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

// Serve static files from the frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '../Frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
