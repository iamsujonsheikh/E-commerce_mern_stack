const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { mongodbUrl } = require('../secret');
dotenv.config();

const connectToDB = async (options = {}) => {
    try {
        await mongoose.connect(mongodbUrl, options);
        console.log("😎 Successful connect Database.");

        mongoose.connection.on('error', () => {
            console.error("DB connection error", error);
        })
    } catch (error) {
        console.error("🔥Couldn,t connect to DB", error.toStringe());
    }
};
module.exports = connectToDB;
