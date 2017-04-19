const express = require('express');

const phrases = require('./data/phrases');

const PORT = 1337;
const IP = '127.0.0.1';
const app = express();

//serve index.html on GET /
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

//

app.listen(PORT, () => {
  console.log(`learn-you-hangukmal express edition is listening on port ${PORT}`);
});
