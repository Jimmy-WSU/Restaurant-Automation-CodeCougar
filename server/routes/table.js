var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');

var pool = mysql.createPool( dbConfig );

/* Table list */
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
