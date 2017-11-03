var express = require('express');
var router = express.Router();
var request = require('request')
var fs = require('fs');
const https = require('https');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile('index.html', {
        root: 'public'
    });
});


router.get('/getquestion', function (req, res, next) {
    //var userinput = req.query.q.toLowerCase();
    var myWord = "http://www.jservice.io/api/random";
    console.log("In getquestion");
    request(myWord).pipe(res);
});

router.post('/getanswer', function (req, res, next) {
    //var userinput = req.query.q.toLowerCase();
    res.end('{"success":"correct", "status" : 200}');

});


module.exports = router;
