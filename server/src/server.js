const app = require("./app");
const { serverPort } = require("./secret");
const connectToDB = require('./config/db');


// APPLICATION LISTEN & CALL BACK SOMETHING.
app.listen(serverPort, async () => {
    console.log(`Server is running at http://localhost ${serverPort}`)
    await connectToDB();
});