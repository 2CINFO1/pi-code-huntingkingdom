var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require("helmet");
var bodyParser = require('body-parser')
const dotenv = require("dotenv");
const cors = require('cors');


const cryptoRoute = require("./routes/product/crypto");
const cartRoute = require("./routes/product/cart");
const orderRoute = require("./routes/product/order");
const productRoute = require("./routes/product/product");
const authRoute = require("./routes/user/auth");
const userRoute = require("./routes/user/user");

var indexRouter = require('./routes/index');
var eventsRouter = require('./routes/events/events');
var toolsRouter = require('./routes/events/tools');

const blogRouter = require('./routes/blogs/blog');
const mapsRouter = require('./routes/maps/maps');

const reclamationRoute = require("./routes/user/reclamation");

const campRouter = require('./routes/maps/camping_spot');
const areaRouter = require('./routes/maps/area');
const huntRouter = require('./routes/maps/hunt_spot');
const animalRouter = require('./routes/maps/entities/animal');

var app = express();


dotenv.config();
app.use(cors())

//--------------- connection to the database--------------------------------------------
var mongoose = require('mongoose');
mongoose.connect(process.env.Mongo_URL,
    (err) => {
        if (err)
            console.log('Error when connecting to DB : ' + err.message)
        else
            console.log('Connected to DB')
    }
);
//------------- connection to the database ended----------------------------------------

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// parse application/json
app.use(bodyParser.json())


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      // ...
    })
  );
    //allow cross origin requests
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});



app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/tools', toolsRouter);


app.use('/blogs', blogRouter);

app.use('/maps', mapsRouter);

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/crypto", cryptoRoute);

app.use("/api/reclamation", reclamationRoute);
app.use('/camp', campRouter);
app.use('/area', areaRouter);
app.use('/hunt', huntRouter);
app.use('/animal', huntRouter);
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

// app.listen("5000", () => {
//     console.log("Backend is running");
// })

module.exports = app;