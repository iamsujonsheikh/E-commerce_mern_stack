const app = require("./app");
const { serverPort } = require("./secret");


// APPLICATION LISTEN & CALL BACK SOMETHING.
app.listen(serverPort, () => {
    console.log(`Server is running at http://localhost${serverPort}`)
});