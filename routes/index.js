var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET permalink Box. */
router.get('/Boxes/:id/', function(req, res, next) {
  res.render('index', {hidden:req.params.id});;
});

module.exports = router;
