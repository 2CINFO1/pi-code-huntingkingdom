const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

const cartRoute = require("./routes/product/cart");
const orderRoute = require("./routes/product/order");
const productRoute = require("./routes/product/product");
const authRoute = require("./routes/user/auth");
const userRoute = require("./routes/user/user");
const reclamationRoute = require("./routes/user/reclamation");

const mapsRouter = require('./routes/maps/maps');
const campRouter = require('./routes/maps/camping_spot');
const areaRouter = require('./routes/maps/area');
const huntRouter = require('./routes/maps/hunt_spot');

const indexRouter = require('./routes/index');
const eventsRouter = require('./routes/events/events');
const blogRouter = require('./routes/blogs/blog');

const app = express();

dotenv.config();

// connection to the database
const mongoose = require('mongoose');
mongoose.connect(process.env.Mongo_URL,
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
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//  routes management
app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/blogs', blogRouter);

app.use('/maps', mapsRouter);
app.use('/camp', campRouter);
app.use('/area', areaRouter);
app.use('/hunt', huntRouter);

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);
app.use("/api/reclamation",reclamationRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen("5000", () => {
    console.log("Backend is running");
})

module.exports = app;