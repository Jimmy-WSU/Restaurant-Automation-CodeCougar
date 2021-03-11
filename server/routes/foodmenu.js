var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');

var pool = mysql.createPool( dbConfig );

/* User Signin */
router.use('/', function(req, res, next) {
    console.log(req.body)
    pool.query("SELECT * FROM foodmenu;", function (err, rows, fields) {
        console.log(rows)
        res.json({
            status: 'Successful',
            menu: rows
        })
    })
});

module.exports = router;
