var express = require('express');
var router = express.Router();
var request = require('request')
var fs = require('fs');
const https = require('https');


var highscore = 100;


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

router.get('/highscore', function (req, res, next) {
    console.log("In highscore");
    res.send(highscore.toString());
});

router.post('/getanswer', function (req, res, next) {
    //var userinput = req.query.q.toLowerCase();
    var score = req.query.s;
    console.log(score);

    if (score > highscore) {
        highscore = score;
        res.end('{"success":"You have the high score!" , "status" : 200}');

    }

    res.end('{"success":"correct", "status" : 200}');

});


module.exports = router;
