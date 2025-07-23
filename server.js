const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routers =require("./Router/router.js");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());
app.use(routers)
app.use(express.static("public"))

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });