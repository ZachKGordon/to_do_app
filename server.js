// Requiring express.
var express = require('express');
var app = express();

// Assigning the port.
// Assigning public as the root folder.
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

// Listening for request on port and sends callback.
app.listen(app.get('port'), function () {
  console.log('Server running');
});

// Sends root pages like index as a response.
// Or an error.
app.use('/', function(req, res) {
  var options = {
    root:__dirname + '/public/',
  };
  res.sendFile('./error.html', options, function (error) {
    if (error) {
      console.log(error);
      res.status(err.status).end ();
    }
  });
});


