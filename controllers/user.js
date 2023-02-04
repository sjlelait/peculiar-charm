const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// signup

router.get("/signup", (req, res) => {
    res.render("signup.ejs", {
        title: "Sign Up"
    });
});

router.post("/signup", (req, res) => {
    req.body.password = hashedPassword;
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    User.create(req.body, (err, newUser) => {
        res.redirect("/collections");
    });
});

// login users


// logout users





module.exports = router;