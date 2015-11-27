var express = require('express');
var router = express.Router();
var memes = require('../public/static/memes.json');
var messages = require('../public/static/comments.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  // renders the file named "index.jade" along with the data
  res.render('index', {title: 'Buffy Meme', data: memes, comnt: messages});
});

// exports the router

module.exports = router;
