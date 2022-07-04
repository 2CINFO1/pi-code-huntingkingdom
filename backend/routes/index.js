var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/t', function(req, res, next) {
  res.render('index', { title: 'home test' });
});

module.exports = router;
