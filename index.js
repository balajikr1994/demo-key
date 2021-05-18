'use strict';
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hello Key Auth Check');
});

/* app.get('/key-auth', (req, res) => {
  const fileDIR = path.resolve(`${__dirname}/gudsho.key`);
  const fileRead = fs.readFileSync(fileDIR);
  return res.status(200).send(fileRead.toString());
}); */

app.get('/key-auth', function(req, res){
    var options = {
        root: path.join(__dirname)
    };
      
    var fileName = 'gudsho.key';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(process.env.PORT, () => console.log('Express listening on', process.env.PORT));
