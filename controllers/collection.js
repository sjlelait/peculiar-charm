const express = require("express");
const router = express.Router();
const Collection = require("../models/collections");
    
    
// SEED 

// INDEX
router.get("/collections", (req, res) => {
    Collection.find({}, (err, allCollections) => {
        res.render("index.ejs", {
            collections: allCollections
        });
    });
});
// NEW

// DELETE

// UPDATE

// CREATE
router.post("/collections", (req, res) => {
    res.send(req.body);
});

// EDIT

// SHOW


module.exports = router;