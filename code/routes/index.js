// http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    res.render('index', { title: 'ngTodo App' });
});

module.exports = router;
