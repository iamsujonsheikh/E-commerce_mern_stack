require('dotenv').config();

// APPLICATION PORT.
const serverPort = process.env.SERVER_PORT || 3000;

module.exports = { serverPort };
