const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
  // console.log('In the product page...');
  // res.send(
  //   '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button/></form>'
  // );

  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  // move to specify route
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      path: '/',
      pageTitle: 'Shop',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
  // sending response in express
  // res.send('<h1>Hello from Express!</h1>');

  // we use sendFile to sent file to the user. Path method allow us to make absolute path to that file. __dirname in this case point to views folder.
  // 1) res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  // 2) using our helper function path.js from util
  // console.log(adminProducts.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  // 3) /using our templates engine => pug in this case. we can pass as a next argument data which we want to use it in our tempaltes .pug file
};
