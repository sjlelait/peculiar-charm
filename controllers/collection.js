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
    res.render("new-collection.ejs", {
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
    Collection.create(req.body, (err, createdCollection) => {
        res.redirect("/collections");
    });
});

// EDIT

// SHOW
router.get("/collections/:id", (req, res) => {
    Collection.findById(req.params.id, (err, foundCollection) => {
        res.render("show-collection.ejs", {
            collection: foundCollection,
            title: "Collection"
        });
    });
});
module.exports = router;