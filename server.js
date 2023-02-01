// require dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const logger = require("morgan");
const collectionRouter = require("./controllers/collection");
const pieceRouter = require("./controllers/piece");

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
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(logger("dev"));
// mount routes
    // is this where it should live?
app.get("/collections/about", (req, res) => {
    res.render("about.ejs", {
        title: "About Me"
    });
});

app.use(collectionRouter);
app.use(pieceRouter);
    

// tell app to listen on dedicated port
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`);
});