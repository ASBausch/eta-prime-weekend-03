var express = require('express');
var router = express.Router();
var memes = require('../public/static/memes.json');
var variableComments = require('../public/static/variableComments.json');
var fs = require('fs');
var path = require('path');

router.post('/', function(req, res, next) {
  //these two variables set the input of the form to variables
  var newMessage = req.body.message;
  var idMatch = req.body.imageID; //this syntax?
  //this loop only finds where to put the newMessage
  console.log(idMatch);
  var formComment;
  for (i = 0; i < variableComments.length; i++) {
    if (variableComments[i].imageID == idMatch) {
      formComment = variableComments[i];
    }
  }

  //push the newMessage to the proper index of the array
  formComment.message.push(newMessage);
  console.log("array push");

  // stringify it so that it will write to the array correctly
  var string = JSON.stringify(variableComments);

  // This is the path the file is in

  var filePath = path.join(__dirname, '../public/static/variableComments.json');
  console.log("File save");
  // write the stringified version to the file
  fs.writeFile(filePath, string, function(err) {
     if (err) {
       // if there is an error, "next" middleware will handle it.
       // Next in our case is the error handler in app.js
       next(err);
     } else {
       // it's all good! Send the object back.
       res.send(newMessage);
     }
   });

  //res.redirect('/memes/' + idMatch);

});

module.exports = router;
