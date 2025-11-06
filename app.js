var createError = require('http-errors');   
var express = require('express');            
var path = require('path'); // Handles file paths
var cookieParser = require('cookie-parser');
var logger = require('morgan');              

// Import Route Files 
var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users'); 
// Initialize Express App 
var app = express();


app.set('views', path.join(__dirname, 'views'));// Folder where EJS templates are stored
app.set('view engine', 'ejs');// Set EJS as templating engine


app.use(logger('dev')); // Logs requests 
app.use(express.json());                         
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Enables cookie reading

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from node_modules for Bootstrap, jQuery, FontAwesome, Popper.js
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery')));
app.use('/@popperjs', express.static(path.join(__dirname, 'node_modules/@popperjs')));
app.use('/@fortawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome')));


app.use('/', indexRouter);  // Handles all main pages
app.use('/users', usersRouter); // Default route (optional, can be removed)


app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {
 
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
