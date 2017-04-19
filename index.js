const express = require('express');

const phrases = require('./data/phrases');
const logger = require('./middleware/logger');

const PORT = 1337;
const IP = '127.0.0.1';
const app = express();

app.use(logger);

// serve static assets
app.use('/client', express.static(__dirname + '/client'));

//serve index.html on GET /
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/client/index.html');
});


app.listen(PORT, () => {
  console.log(`learn-you-hangukmal express edition is listening on port ${PORT}`);
});
