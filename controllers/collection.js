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
router.put("/collections/:id", (req, res) => {
    if(req.body.completed === "on") {
        req.body.completed = "true"
    } else {
        req.body.completed = false
    }
    Collection.findByIdAndUpdate((req.params.id), req.body, {
        new: true,
    },
    (err, updatedCollection) => {
        res.redirect(`/collections/${req.params.id}`)
    });
});

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
router.get("/collections/:id/edit", (req, res) => {
    Collection.findById(req.params.id, (err, foundCollection) => {
        res.render("edit-collection.ejs", {
            collection: foundCollection,
            title: "Edit Collection"
        });    
    });
});
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