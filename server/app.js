// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入json解析中间件
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var productTypeRouter = require('./routes/productType');
var productFuncRouter = require('./routes/productFunc');
var deviceRouter = require('./routes/device');
// var httpsRouter = require('./routes/https');
var usersRouter = require('./routes/users');

var app = express();

global.key = 'greekey';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// 自定义跨域中间件
var allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};
app.use(allowCors);//使用跨域中间件

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', indexRouter);
app.use('/productType', productTypeRouter);
app.use('/productFunc', productFuncRouter);
app.use('/device', deviceRouter);
// app.use('/https', httpsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../public')));

// 监听
app.listen(3000, function () {
  console.log('success listen...3000');
});
