
const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Database initialized with data");
};

const initialize = async () => {
    try {
        await main();
        await initDB();
    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.connection.close();
    }
};

initialize();
