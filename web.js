var express = require('express');
var app = express();
var fs = require('fs')
app.use(express.logger());

var file = fs.readFileSync('index.html')
var output = file.toString()

app.get('/', function(request, response) {
 response.format({'text/plain': function(){
 response.send(output)}
})});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
