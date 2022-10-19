//import path module
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminProducts = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminProducts.products;

  // sending response in express
  // res.send('<h1>Hello from Express!</h1>');

  // we use sendFile to sent file to the user. Path method allow us to make absolute path to that file. __dirname in this case point to views folder.
  // 1) res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  // 2) using our helper function path.js from util
  // console.log(adminProducts.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  // 3) /using our templates engine => pug in this case. we can pass as a next argument data which we want to use it in our tempaltes .pug file
  res.render('shop', {
    prods: adminProducts.products,
    path: '/',
    pageTitle: 'Shop',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
