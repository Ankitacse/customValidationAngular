const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const path = require('path')
const port =  8000;
const app = express();

app.use(express.static(path.join(__dirname, '../dist/jewelrypro')));
app.use(bodyParser.json({
  limit: '50mb'
}));

/* mongo.Promise = global.Promise;
mongo.connect(env.db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
}, function (err) {
  if (err) {
    console.log('connection error. ' + err);
  }
  console.log('mongodb connected');
}); */

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/jewelrypro', 'index.html'));
});

app.listen(port, function () {
  console.log('server running on localhost:' + port);
});
