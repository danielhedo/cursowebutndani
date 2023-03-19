var express = require('express');
var router = express.Router();


var suma = 5+7;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Esta es la página de productos. Esta es la variable suma: ' + suma);
});

module.exports = router;
