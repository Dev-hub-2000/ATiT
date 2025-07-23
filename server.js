const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routers =require("./Router/router.js");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());
app.use(routers)
app.use(express.static("public"))

const connectionDB = async() => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
}

app.listen(port,()=>{
  console.log(`servering is running on ${port}`)
  connectionDB();
})