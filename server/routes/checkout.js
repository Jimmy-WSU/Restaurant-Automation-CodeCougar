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
    let food = '';
    req.body.foodList.forEach(({ foodname }) => {
        food += foodname + ', ';
    });
    food = food.substring(0, food.lastIndexOf(','));
    let SQL = '';
    SQL = "INSERT INTO `order` (tableID, waiterName, foodList, totalPrice, orderStatus) VALUES ('"+ req.body.tableID +  "', '"+ req.body.waiterName +  "', '"
        + food +  "', '" + req.body.totalPrice + "', 'Preparing')";

    pool.query(SQL, function (err, rows, fields) {
        console.log(rows.insertId)
        res.json({
            status: 'Successful',
            orderID: rows.insertId
        })
    })
});

module.exports = router;
