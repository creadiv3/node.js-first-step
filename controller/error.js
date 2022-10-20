exports.get404 = (req, res, next) => {
  // to set satus code we use status methos. we can chain many methods to res but send must be the last one
  // res.status(404).send('<h1>Page not found</h1>');

  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Page not found' });
};
