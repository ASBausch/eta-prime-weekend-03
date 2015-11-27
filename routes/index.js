var express = require('express');
var router = express.Router();
var memes = require('../public/static/memes.json');
var comments = require('../public/static/comments.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  // renders the file named "index.jade" along with the data
  res.render('index', {title: 'Buffy Meme', data: memes});
});

// creates a page /memes with images and comments
router.get('/memes/:id', function(req, res, next) {
  //getting a request from memes with an id and
  //we are setting that id to a variable
  var memeID = req.params.id;

  //we need to find out if the request origin id matches the meme id
  var currentMeme;
  for (i = 0; i < memes.length; i++) {
    //if they match the currentMeme is set to that index
    if (memes[i].id == memeID) {
      currentMeme = memes[i];
    }
  }

  var currentComment;
  for (i = 0; i < comments.length; i++) {
    if (comments[i].imageID == memeID) {
      currentComment = comments[i];
    }
  }

  //pass in the meme object with a specific index

  //pass in the comment object with a specific matching index
  //key value pairs - you reference the key in the template
  res.render('meme', {title: 'Buffy Meme', meme: currentMeme,
    comment: currentComment, });

});

// exports the router

module.exports = router;
