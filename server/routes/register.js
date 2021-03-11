var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');

var pool = mysql.createPool( dbConfig );

/* User Register */
router.use('/', function(req, res, next) {
    console.log(req.body)
    pool.query("SELECT * FROM user WHERE username='" + req.body.username + "';", function (err, rows, fields) {
        // console.log(err)
        if (err) throw err;
        if (rows[0]!==undefined) {
            res.json({
                status: 'Username already exists'
            })
        } 
        else {
            pool.query("INSERT INTO user (username, password, role, firstname, lastname) VALUES ('"
                + req.body.username + "', '" + req.body.password + "', '" + req.body.role +  "', '" + req.body.firstname +  "', '" 
                + req.body.lastname + "')", function (err, rows, fields) {
                // console.log(err)
                if (err) throw err;
                console.log(rows)
                res.json({
                    status: 'Successful'
                })
            })
        }

        console.log(rows)

    })
    
    
});

module.exports = router;
