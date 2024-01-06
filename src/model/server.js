const express = require('express');
const mongoose = require('mongoose');
const Sales = require('./salesModel');

const app = express();
const port = 3000; // Choose your preferred port

mongoose.connect('mongodb://localhost:27017/salesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// Define your API endpoints here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
