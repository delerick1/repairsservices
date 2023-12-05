const express = require('express');

//const geneticDiseases = require('./genetic-diseases/genetic-diseases.route');

const app = express();

const calculateRequestTime = (req, res, next) =>{
  const requestTime = new Date().toISOString();
  req.requestTime = requestTime;
  next()
}

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(calculateRequestTime);
//app.use('/api/v1',geneticDiseases);

module.exports = app;