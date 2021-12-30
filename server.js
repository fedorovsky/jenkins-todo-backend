const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const expressJwt = require('express-jwt');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const logger = require('morgan');
const apiRouter = require('./app/router/api');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Instantiating the express app
const app = express();
app.use(logger('dev'));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwtCheck = expressJwt({
  secret: process.env.JWT_ACCESS_SECRET,
  algorithms: ['HS256'],
});

app.use('/api', apiRouter);

app.get('/test', jwtCheck, (req, res)=> {
  res.send('hello world');
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

start()