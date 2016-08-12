const http = require('http');
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const names = require('./routes/names');

//initialize
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//namespace the routes
app.use('/names', names);

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
