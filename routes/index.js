var express = require('express');
var router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Home - Hashim Khan' });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me - Hashim Khan' });
});

// Projects page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects - Hashim Khan' });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact - Hashim Khan' });
});

module.exports = router;
