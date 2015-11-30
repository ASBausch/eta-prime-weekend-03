
$(document).ready(function() {

  // get the content area
  var $contentArea = $('div.comment');

  // this is the submit function for the form
  $('.form').on('submit', function(event) {

    // stop the page from refreshing
    event.preventDefault();

    // gets the data from the form, based on element's "name" property
    var data = $(this).serializeArray();

    // new empty object
    var newComment = {};

    // put the form's matching input values into the properties of the object
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === 'message') {
        newComment.message = data[i].value;
      } else if (data[i].name === 'imageID') {
        newComment.imageID = data[i].value;
      }
    }

    // finally, make an ajax call, using the POST method, and send the data
    $.ajax({url: '/post',
      type: 'post',
      data: newComment,
    }).done(function(data) {

      // when ajax is done, display the data by appending it to the DOM
      console.log(data);

      $p = $('<p>');
      $p.text(data);

      $contentArea.append($p);
    });

    // reset the form
    $(this)[0].reset();
  });
});
