var express = require('express');
var router = express.Router();
var memes = require('../public/static/memes.json');
var variableComments = require('../public/static/variableComments.json');
var fs = require('fs');
var path = require('path');

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
