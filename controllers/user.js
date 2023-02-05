const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");

// signup

router.get("/signup", (req, res) => {
    res.render("signup.ejs", {
        title: "Sign Up"
    });
});

router.post("/signup", (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;
    User.create(req.body, (err, newUser) => {
        req.session.userId = newUser._id;
        res.redirect("/collections");
    });
});

// login users
router.get("/login", (req, res) => {
    res.render("login.ejs", {
        title: "Login"
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, foundUser) => {
        if(!foundUser) {
            return res.redirect("/login");
        } 
        const isMatched = bcrypt.compareSync(req.body.password, foundUser.password)
        if(!isMatched) {
            return res.redirect("/login");
        }
        req.session.userId = foundUser._id;
        res.redirect("/collections");
    });
});

// logout users
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/login");
    });
});




module.exports = router;