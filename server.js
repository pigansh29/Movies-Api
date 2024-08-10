const express = require('express');
const mongoose = require('mongoose');
const dotenv    = require("dotenv").config()
const app = express();
const connectdb = require('./config/db')
// Middleware to parse JSON
app.use(express.json());

connectdb()
 const movies = require('./routes/movies')
app.use('/api/movies', movies);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port http://localhost:${port}...`));