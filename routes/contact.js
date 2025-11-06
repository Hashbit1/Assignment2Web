var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next)  {
    res.render('contact', { 
        title: 'Contact',
        message: 'If you have any questions, please feel free to reach out to me. I look forward to hearing from you!'
        });
    });

module.exports = router;

