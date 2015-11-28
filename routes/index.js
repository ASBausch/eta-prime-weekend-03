var express = require('express');
var router = express.Router();
var memes = require('../public/static/memes.json');
var variableComments = require('../public/static/variableComments.json');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // renders the file named "index.jade" along with the data
  res.render('index', {title: 'Buffy Meme', data: memes});
});

// creates a page /memes with individual images and comments
//based on the url id
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

router.post('/', function(req, res, next) {
  //these two variables set the input of the form to variables
  var newMessage = req.body.message;
  var idMatch = req.body.memeId; //this syntax?
  //this loop only finds where to put the newMessage
  var formComment;
  for (i = 0; i < variableComments.length; i++) {
    if (variableComments[i].imageID == idMatch) {
      formComment = variableComments[i];
    }
  }

  //push the newMessage to the proper index of the array
  formComment.message.push(newMessage);

  res.redirect('/memes/' + idMatch);

});

module.exports = router;
