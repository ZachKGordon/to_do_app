var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

app.listen(app.get('port'), function () {
  console.log('Server running');
});

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


