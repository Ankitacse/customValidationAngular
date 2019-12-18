const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const config = require('./config')

/**
 * mongo DB connection
 */
mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE_URL, config.mongoClientOptions)

/**
 * mongo db connection on success
 */
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.DATABASE_URL)
})

/**
 * mongo db on connection Error
 */
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err)
})

/**
 * App uses resource
 */
app.use(express.static(path.join(__dirname, '../dist/jewelrypro')));
app.use(bodyParser.json({
  limit: '50mb'
}));

/**
 * @description use bodyparser for encode url data and extend data limit
 */
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '150mb'
}));

/**
 * @description folder permission
 */
app.use(express.static(path.join(__dirname, 'uploads')));


/**
 * import route module
 */
require('./controller/user')(app)

/**
 * run front end of jewelrypro
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/jewelrypro', 'index.html'));
});

/**
 * listen port 
 */
app.listen(config.PORT, function () {
  console.log('server running on localhost:' + config.PORT);
});
