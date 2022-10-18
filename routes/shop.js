//import path module
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  // sending response in express
  // res.send('<h1>Hello from Express!</h1>');

  // we use sendFile to sent file to the user. Path method allow us to make absolute path to that file. __dirname in this case point to views folder.
  // 1) res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  // 2) using our helper function path.js from util
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
