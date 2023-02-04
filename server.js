// require dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const logger = require("morgan");
const collectionRouter = require("./controllers/collection");
const pieceRouter = require("./controllers/piece");
const userRouter = require("./controllers/user");

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
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));
// authentication middleware
function isAuthenticated(req, res, next) {
    if(!req.session.userId) {
        res.locals.user = null;
        return res.redirect("/login");
    }
    res.locals.user = req.session.userId;
    next();
}

// home route
app.get("/", (req, res) => {
    res.render("home.ejs", {
        title: "Home"
    });
});

app.use(userRouter);
app.use(isAuthenticated, collectionRouter);
app.use(isAuthenticated, pieceRouter);
// mount routes
    // is this where it should live?




    

// tell app to listen on dedicated port
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`);
});