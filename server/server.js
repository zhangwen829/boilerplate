const express = require('express');
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const port = process.env.PORT || 3000;
// this can be very useful if you deploy to Heroku
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
