var express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('morgan');
const authRouter = require('./app/routes/auth');


// Instantiating the express app
const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Instantiating the express-jwt middleware
const jwtMiddleware = exjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});

app.use('/auth', authRouter);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  }); 

  app.listen(
    process.env.PORT,
    console.log.bind(console, `Server has been started on port 8000`)
  )
