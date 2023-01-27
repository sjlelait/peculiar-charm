const express = require("express");
const router = express.Router();
const Collection = require("../models/collections");
    
    
// SEED 

// INDEX
router.get("/collections", (req, res) => {
    Collection.find({}, (err, allCollections) => {
        res.render("index.ejs", {
            collections: allCollections,
            title: "Collections"
        });
    });
});
// NEW
router.get("/collections/new", (req, res) => {
    res.render("new.ejs", {
        title: "New Collection"
    });
});

// DELETE

// UPDATE

// CREATE
router.post("/collections", (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = "true"
    } else {
        req.body.completed = "false"
    }
    Collection.create(req.body, (error, createdCollection) => {
        res.send(createdCollection);
    });
});

// EDIT

// SHOW


module.exports = router;