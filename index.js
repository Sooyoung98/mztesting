const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('hello gitlab ');
});

app.listen(8900, function()) {
console.log('example app listening on port 8080')
})
