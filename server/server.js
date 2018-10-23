const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db/db.js');

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// auth and api routes
app.use('/api', require('./api'));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../public')));


// sends index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


// this can be very useful if you deploy to Heroku
const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

db.sync()
  .then(() => {
    app.listen(port);
  });
