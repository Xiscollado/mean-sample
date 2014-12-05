var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
    res.sendFile('app.html',{ root: path.join(__dirname, '../layouts/') });
});

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));

module.exports = router;