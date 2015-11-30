var express = require('express');
var router = express.Router();
var memes = require('../public/static/memes.json');
var variableComments = require('../public/static/variableComments.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // renders the file named "index.jade" along with the data
  res.render('index', {title: 'Buffy Meme', data: memes});
});

module.exports = router;
