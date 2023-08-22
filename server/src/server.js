const app = require("./app");

// APPLICATION PORT.
const PORT = 3000;

// APPLICATION LISTEN & CALL BACK SOMETHING.
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost${PORT}`)
});