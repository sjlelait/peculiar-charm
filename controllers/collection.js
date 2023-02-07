const express = require("express");
const router = express.Router();
const Collection = require("../models/collections");
const Piece = require("../models/pieces");

router.get("/collections", (req, res) => {
    Collection.find({}, (err, allCollections) => {
        res.render("index.ejs", {
            collections: allCollections,
            title: "Collections"
        });
    });
});

router.get("/collections/new", (req, res) => {
    res.render("new-collection.ejs", {
        title: "New Collection"
    });
});

router.delete("/collections/:id", (req, res) => {
    Collection.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect("/collections");
    });
});

router.put("/collections/:id", (req, res) => {
    Collection.findByIdAndUpdate((req.params.id), req.body, {
        new: true,
    },
    (err, updatedCollection) => {
        res.redirect("/collections")
    });
});

router.post("/collections", (req, res) => {
    Collection.create(req.body, (err, createdCollection) => {
        res.redirect("/collections");
    });
});


router.get("/collections/:id/edit", (req, res) => {
    Collection.findById(req.params.id, (err, foundCollection) => {
        res.render("edit-collection.ejs", {
            collection: foundCollection,
            title: "Edit Collection"
        });    
    });
});

router.get("/collections/about", (req, res) => {
    res.render("about.ejs", {
        title: "About Me"
    });
});


router.get("/collections/:id", (req, res) => {    
    Collection.findById({ _id: req.params.id })
    .populate("pieces").exec((err, collection) => {
        res.render("show-collection.ejs", {
            collection: collection,
            title: "Collection"
        });
    }); 
});
module.exports = router;