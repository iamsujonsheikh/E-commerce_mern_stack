const express = require('express');
const app = express();
const morgan = require('morgan');


// APPLICATION PORT.
const PORT = 3000;

// USE MORGAN.
app.use(morgan("dev"));

// APPLICATION LISTEN.
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost${PORT}`)
});

// ROUTE.

// HOME ROUTE.
app.get('/', (req, res) => {
    res.send('Wellcome to the server.')
});

// TEST ROUTE.
app.get('/test', (req, res) => {
    res.status(200).json({ message: "Yes GET API is working." })
});

app.post('/test', (req, res) => {
    res.status(200).json({ message: "Yes POST API is working." })
});

app.put('/test', (req, res) => {
    res.status(200).json({ message: "Yes PUT API is working." })
});

app.delete('/test', (req, res) => {
    res.status(200).json({ message: "Yes DELETE API is working." })
});