// require dependencies
const express = require("express");
const mongoose = require("mongoose");

// initialize application
const app = express();

// configure settings
require("dotenv").config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// configure database
mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on("error", (err) => {
    console.log(`Check for Mongo connection: ${err.message}`)
});
db.on("connected", () => {
    console.log("Mongo is connected")
});
// mount middleware
app.use(express.urlencoded({ extended: false }));
// mount routes



// tell app to listen on dedicated port
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`);
});