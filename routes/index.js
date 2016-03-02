var express = require('express');
var router = express.Router();
var json = require('../views/links.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(json);
});

module.exports = router;
