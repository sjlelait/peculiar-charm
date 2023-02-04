const express = require("express");
const router = express.Router();

// signup

router.get("/signup", (req, res) => {
    res.render("signup.ejs", {
        title: "Sign Up"
    });
});

router.post("/signup", (req, res) => {

});

// login users


// logout users





module.exports = router;