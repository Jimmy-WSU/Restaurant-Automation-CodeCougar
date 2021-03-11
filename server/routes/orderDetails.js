var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');

var pool = mysql.createPool( dbConfig );

/* User Signin */
router.use('/', function(req, res, next) {
    console.log(req.body)
    pool.query("SELECT * FROM `order` WHERE orderID = '" + req.body.orderID + "';", function (err, rows, fields) {
        console.log(rows)
        res.json({
            status: 'Successful',
            orderDetails: rows
        })
    })
});

module.exports = router;
