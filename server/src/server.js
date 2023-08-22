const express = require('express');
const app = express();
const morgan = require('morgan');


// APPLICATION PORT.
const PORT = 3000;

// PARSE.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MIDDLEWAR.
// const isLogedIn = (req, res, next) => {
//     const isLogedIn = true;
//     if (isLogedIn) {
//         req.body.id = 101;
//         next();
//     } else {
//         res.status(401).send("Sorry please login !");
//     }
// };

// USE MORGAN.
app.use(morgan("dev"));

// APPLICATION LISTEN & CALL BACK SOMETHING.
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

app.get('/api/user', (req, res) => {
    res.send("I am sujon from user profile.")
    console.log(req.body.id);
});

// CLIENT ERROR HANDLE.
app.use((req, res, next) => {
    res.status(404).send(` Opps this route not available.`)
});
