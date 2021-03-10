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

/* User Signin */
router.use('/', function(req, res, next) {
    console.log(req.body)
    pool.query("SELECT * FROM table;", function (err, rows, fields) {
        console.log(rows)
        res.json({
            status: 'Successful',
            table: rows
        })
    })
});

module.exports = router;
