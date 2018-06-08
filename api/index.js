const express = require('express')//install express
const app = express() //function for express
const peopleRouter = require('./people/router')

const server = app.listen(3000, () => console.log('Express API listening on port 3000'))


//middleware
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

//Router
app.get('/', function (req,res) {
   res.send('Hello');
});

app.use(peopleRouter)
