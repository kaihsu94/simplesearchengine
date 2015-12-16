var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(JSON.stringify({"response":"it worked"}));
});

module.exports = router;
