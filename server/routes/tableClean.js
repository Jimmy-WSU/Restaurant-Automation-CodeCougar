var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');

var pool = mysql.createPool( dbConfig );

/* Get order details */

router.use('/', function(req, res, next) {
    console.log(req.body)
    pool.query("UPDATE `table` SET tableStatus = 'Free' WHERE tableID = '" + req.body.tableID + "';", function (err, rows, fields) {
        console.log(rows)
        res.json({
            status: 'Successful'
        })
    })
});
module.exports = router;
