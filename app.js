const path = require('path');

// const http = require('http'); --- need in case we create server without express
const express = require('express');

//import handlebars template engine
// const { engine } = require('express-handlebars');

// assigng express to variable
const app = express();

//set handlebars engine
// app.engine(
//   'hbs',
//   engine({
//     // this path is set by default
//     layoutsDir: 'views/layouts',
//     defaultLayout: 'main-layout',
//     extname: 'hbs',
//   })
// );

//set template engine to ejs
app.set('view engine', 'ejs');

//set the engine for dynamic templates pug handlebars
// app.set('view engine', 'pug');
// app.set('view engine', 'hbs');

//set directory for out html templates => views is set by default
app.set('views', 'views');

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
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // to set satus code we use status methos. we can chain many methods to res but send must be the last one
  // res.status(404).send('<h1>Page not found</h1>');

  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Page not found' });
});

// const server = http.createServer(app);
// server.listen(3000);

// run server in express
app.listen(3000);
