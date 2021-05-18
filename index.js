'use strict';
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Key Auth Check');
});

app.get('/key-auth', (req, res) => {
    res.set('Content-Type', 'binary/octet-stream');
  const fileDIR = path.resolve(`${__dirname}/gudsho.key`);
  const fileRead = fs.readFileSync(fileDIR);
  return res.status(200).send(fileRead);
});

app.listen(process.env.PORT, () => console.log('Express listening on', process.env.PORT));
