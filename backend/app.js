var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var eventsRouter = require('./routes/events/events');
var app = express();



// connection to the database
var mongoose = require('mongoose');
var config = require('./db/db.json');
mongoose.connect(config.mongo.uri,
    (err) => {
        if (err)
            console.log('Error when connecting to DB : ' + err.message)
        else
            console.log('Connected to DB')
    }
);
// connection to the database ended

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// parse application/json
app.use(bodyParser.json())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//  routes management
app.use('/', indexRouter);
app.use('/events', eventsRouter);


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