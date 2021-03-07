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

/* User Register */
router.use('/', function(req, res, next) {
    // console.log(req.body)
    pool.query("INSERT INTO user (username, password, role) VALUES ('"+ req.body.username + "', '" + req.body.password + "', '" + req.body.role + "')", function (err, rows, fields) {
        // console.log(err)
        if (err) throw err;
            res.json({rows});
        // if (rows[0]!==undefined) {
        //     if (req.body.password == rows[0].password){
        //         res.json({
        //             status: 'Successful'
        //         })
        //     } else {
        //         res.json({
        //             status: 'Incorrect password'
        //         })
        //     }
        // } 
        // else {
        //     res.json({
        //         status: 'Incorrect username'
        //     })
        // }
        
    })
});

module.exports = router;
