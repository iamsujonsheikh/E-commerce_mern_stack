const express = require('express');
const app = express();
const morgan = require('morgan');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');
const seedRouter = require('./routers/seedRouter');

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // Limit each IP to 10 requests per `window` (here, per 1 minute)
    message: "too many request from this ip, please try again later."
});

// PARSE.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// APPLICATION LAVEL USE PAKAGE.
app.use(morgan("dev"));
app.use(xssClean());
app.use(limiter);

// APPLICATION ROUTER.
app.use("/api/users", userRouter);
app.use("/api/seed", seedRouter)


// --------------------ROUTE---------------------


// TEST ROUTE.
app.get('/test', limiter, (req, res) => {
    res.status(200).json({ message: "Yes GET API is working." })
});

// CLIENT ERROR HANDLE.
app.use((req, res, next) => {
    next(createError(404, "Not found."));
});

// SERVER ERROR HANDLER.
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        successfull: false,
        message: err.message
    })
});
module.exports = app;