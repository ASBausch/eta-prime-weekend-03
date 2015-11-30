var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  //.get makes available
  // renders the file named "index.jade" along with the data
  res.render('index', {title: 'Buffy Meme', data: memes});
});

module.exports = router;
