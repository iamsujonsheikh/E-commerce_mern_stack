const express = require('express');
const app = express();
const morgan = require('morgan');
const createError = require('http-errors');
const xss = require('xss-clean');


// PARSE.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// USE MORGAN.
app.use(morgan("dev"));

// --------------------ROUTE---------------------

// HOME ROUTE.
app.get('/', (req, res) => {
    res.send('Wellcome to the server.')
});

// TEST ROUTE.
app.get('/test', (req, res) => {
    res.status(200).json({ message: "Yes GET API is working." })
});

app.get('/api/user', (req, res) => {
    res.send("I am sujon from user profile.")
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