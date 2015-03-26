var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Accessing index API message');
  next();
});

/* GET index API message. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Welcome to my api!' });
});

module.exports = router;
