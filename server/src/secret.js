const dotenv = require('dotenv');
dotenv.config();

// APPLICATION PORT.
const serverPort = process.env.SERVER_PORT || 3000;

const mongodbUrl = process.env.MONGODB_URL;

const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/default.png";


module.exports = { serverPort, mongodbUrl, defaultImagePath };
