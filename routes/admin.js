const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
// make express router
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // console.log('In the product page...');
  // res.send(
  //   '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button/></form>'
  // );

  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// we can use app.get: post, put, patch, delete etc. to filter our routes
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  // move to specify route
  res.redirect('/');
});

// export our router express
module.exports = router;
