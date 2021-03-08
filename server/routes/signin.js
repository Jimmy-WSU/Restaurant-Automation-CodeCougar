var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'restaurant_automation'
});

/* User Login */
router.use('/', function(req, res, next) {
    // console.log(req.body)
    pool.query("SELECT * FROM user WHERE username='" + req.body.username + "';", function (err, rows, fields) {
        if (err) throw err;
        if (rows[0]!==undefined) {
            if (req.body.password == rows[0].password){
                res.json({
                    status: 'Successful',
                    role: rows[0].role
                })
            } else {
                res.json({
                    status: 'Incorrect password'
                })
            }
        } 
        else {
            res.json({
                status: 'Incorrect username'
            })
        }
        
    })
});

module.exports = router;
