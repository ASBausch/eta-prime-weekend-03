var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');
var variableComments = require('../data/variableComments.json');

//gets the meme page - memes with individual images and comments
//based on the url id since our routes are now seperated
///:id is all we need because we already know it is on /memes
router.get('/:id', function(req, res, next) {
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
  for (i = 0; i < variableComments.length; i++) {
    //if they match the comment is set to the correct comment
    if (variableComments[i].imageID == memeID) {
      currentComment = variableComments[i];
    }
  }

  //pass in the meme object with a specific index

  //pass in the comment object with a specific matching index
  //key value pairs - you reference the key in the template
  res.render('meme', {title: 'Buffy Meme', meme: currentMeme,
    comment: currentComment, });

});

module.exports = router;
