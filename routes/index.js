var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  /** GET makes the url available while res(responce)
  renders the file named "index.jade" along with the data
  from memes.json
  */
  res.render('index', {title: 'Buffy Meme', data: memes});
});

module.exports = router;
