const express = require('express');
const app = express();

// APPLICATION PORT.
const PORT = 3000;

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
    res.status(200).json({ message: "Yes test API is working." })
});