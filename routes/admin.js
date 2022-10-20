// const path = require('path');

const express = require('express');

const productsController = require('../controller/products');

// const rootDir = require('../util/path');
// make express router
const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

// we can use app.get: post, put, patch, delete etc. to filter our routes
router.post('/add-product', productsController.postAddProduct);

// export our router express
module.exports = router;
