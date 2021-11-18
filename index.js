var express = require("express");
const {Router} = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/note.routes');


var app = express();


app.use(cors())
app.use(express.json({ extended: true }))
app.use('/api/note', routes);


async function start() {
  try {
    const uri = `mongodb://109.86.230.100/notes`
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB connected.')
    app.listen(
      8000,
      console.log.bind(console, `Server has been started on port 8000`)
    )
  } catch (e) {
    console.log('MongoDB connection failed.', e.message)
    console.log(e)
  }
}

start();
