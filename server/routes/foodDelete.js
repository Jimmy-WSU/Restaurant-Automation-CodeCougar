var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');

var pool = mysql.createPool( dbConfig );

/* Get food menu */
router.use('/', function(req, res, next) {
    console.log(req.body.key)
    pool.query("DELETE FROM foodmenu WHERE `key` = '" + req.body.key + "';", function (err, rows, fields) {
        // console.log(rows)
        res.json({
            status: 'Successful',
            menu: rows
        })
    })
});

module.exports = router;
