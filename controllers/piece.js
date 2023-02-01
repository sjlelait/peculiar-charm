const express = require("express");
const router = express.Router();
const Piece = require("../models/pieces");
const Collection = require("../models/collections");
  
  
// SEED 

// INDEX

// NEW
router.get("/collections/:collectionId/new", (req, res) => {
    res.render("new-piece.ejs", {
        collection: Collection,
        title: "New Piece"
    });
});
// DELETE

// UPDATE
router.put("/collections/:collectionId/:id", (req, res) => {
    if(req.body.completed === "on") {
        req.body.completed = "true"
    } else {
        req.body.completed = false
    }
    Piece.findByIdAndUpdate((req.params.id), req.body, {
        new: true,
    },
    (err, updatedPiece) => {
        res.redirect(`/collections/${req.params.id}`)
    });
});

// CREATE
router.post("/collections/:collectionId/:id", (req, res) => {
    if(req.body.completed === "on") {
        req.body.completed = "true"
    } else {
        req.body.completed = false
    }
    Piece.create(req.body, (err, createdPiece) => {
        res.redirect("/collections/:collectionId")
    });
});

// EDIT
router.get("/collections/:collectionId/:id/edit", (req, res) => {
    Piece.findById(req.params.id, (err, foundPiece) => {
        res.render("edit-piece.ejs", {
            piece: foundPiece,
            title: "Edit Piece"
        });
    });
});
// SHOW

module.exports = router;