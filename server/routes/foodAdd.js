var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');

var pool = mysql.createPool( dbConfig );

/* Get food menu */
router.use('/', function(req, res, next) {
    console.log(req.body.key)
    pool.query("INSERT INTO foodmenu (foodname, foodprice) VALUES ('"
                + req.body.foodname + "', '" + req.body.foodprice + "')", function (err, rows, fields) {
                // console.log(err)
                if (err) throw err;
                console.log(rows)
                res.json({
                    status: 'Successful'
                })
            })
});

module.exports = router;
