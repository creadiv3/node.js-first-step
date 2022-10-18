const path = require('path');

// const http = require('http'); --- need in case we create server without express
const express = require('express');

// assigng express to variable
const app = express();

//import admin routes
const adminRoutes = require('./routes/admin');
//import shop routes
const shopRoutes = require('./routes/shop');

// import req.body parser
const bodyParser = require('body-parser');

// use res.body parser to encode body
app.use(bodyParser.urlencoded({ extended: false }));
// give accsess to static file
app.use(express.static(path.join(__dirname, 'public')));

// LEC '/' slash means every routes becouse every routes start with '/' sign.
// app.use('/', (req, res, next) => {
//   console.log('In the middleware...');
//   // next arg is a function which allows us to go to the next middleware. If we not use next() we sholud send the response.
//   next();
// });

// routing
// we can pass first arg to filter are routes base on that
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // to set satus code we use status methos. we can chain many methods to res but send must be the last one
  // res.status(404).send('<h1>Page not found</h1>');

  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// const server = http.createServer(app);
// server.listen(3000);

// run server in express
app.listen(3000);
