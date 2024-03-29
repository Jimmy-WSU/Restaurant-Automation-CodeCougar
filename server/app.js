var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
// var bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

var indexRouter = require('./routes/index');
var signinRouter = require('./routes/signin');
var registerRouter = require('./routes/register');
var foodmenuRouter = require('./routes/foodmenu');
var employeesRouter = require('./routes/employees');

var createOrderRouter = require('./routes/createOrder');
var tableRouter = require('./routes/table');
var tableAllRouter = require('./routes/tableAll');
var tableCleanRouter = require('./routes/tableClean');
var orderDetailsRouter = require('./routes/orderDetails');
var getUnassignedOrderListRouter = require('./routes/getUnassignedOrderList');
var updateChefOrderRouter = require('./routes/updateChefOrder');
var getFoodReadyRouter = require('./routes/getFoodReady');
var foodAddRouter = require('./routes/foodAdd');
var foodDeleteRouter = require('./routes/foodDelete');
var serveTheFoodsRouter = require('./routes/serveTheFoods');
var getReadyOrderListRouter = require('./routes/getReadyOrderList');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/signin', signinRouter);
app.use('/register', registerRouter);
app.use('/foodmenu', foodmenuRouter);
app.use('/createOrder', createOrderRouter);
app.use('/table', tableRouter);
app.use('/tableAll', tableAllRouter);
app.use('/tableClean', tableCleanRouter);
app.use('/orderDetails', orderDetailsRouter);
app.use('/getUnassignedOrderList', getUnassignedOrderListRouter);
app.use('/getReadyOrderList', getReadyOrderListRouter);
app.use('/updateChefOrder', updateChefOrderRouter);
app.use('/getFoodReady', getFoodReadyRouter);
app.use('/foodAdd', foodAddRouter);
app.use('/foodDelete', foodDeleteRouter);
app.use('/serveTheFoods', serveTheFoodsRouter);
app.use('/employees', employeesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
