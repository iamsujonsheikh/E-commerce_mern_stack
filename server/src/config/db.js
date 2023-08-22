const mongoose = require('mongoose');
const { mongodbUrl } = require('../secret');

const connectDatabase = async (options = {}) => {
    try {
        await mongoose.connect(mongodbUrl, options);
        console.log("Database is connected succesfull.");

        mongoose.Connection.on("error", () => {
            console.error("Databse connection error: ", error)
        })
    } catch (error) {
        console.error("Cannot connection DB: ", error.toString());
    }
}
module.exports = connectDatabase;