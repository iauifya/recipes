var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.render('index', { title: 'Express' });
});

module.exports = router;
