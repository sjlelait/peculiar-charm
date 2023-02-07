const express = require("express");
const router = express.Router();
const Piece = require("../models/pieces");
const Collection = require("../models/collections");
const cloudinary = require("cloudinary").v2;

router.get("/collections/:collectionId/new", (req, res) => {
    res.render("new-piece.ejs", {
        collectionId: req.params.collectionId,
        title: "New Piece"
    });
});

router.delete("/collections/:collectionId/:id", (req, res) => {
    Piece.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect(`/collections/${req.params.collectionId}`)
    });
});

router.put("/collections/:collectionId/:id", (req, res) => {
    Piece.findByIdAndUpdate((req.params.id), req.body, {
        new: true,
    },
    (err, updatedPiece) => {
        res.redirect(`/collections/${req.params.collectionId}`)
        console.log(updatedPiece)
    });
});

router.post("/collections/:collectionId/pieces", (req, res) => {
    Piece.create(req.body, (err, createdPiece) => {
        Collection.findByIdAndUpdate(req.params.collectionId, { $push: { pieces: createdPiece } }, (err, updatedCollection) => {
            res.redirect(`/collections/${req.params.collectionId}`)
        });
    });
});


router.get("/collections/:collectionId/:id/edit", (req, res) => {
    Piece.findById(req.params.id, (err, foundPiece) => {
        res.render("edit-piece.ejs", {
            piece: foundPiece,
            title: "Edit Piece"
        });
    });
});

router.get("/collections/:collectionId/:id/show", (req, res) => {
    Piece.findById(req.params.id, (err, foundPiece) => {
        res.render("show-piece.ejs", {
            piece: foundPiece,
            title: "Show Piece"
        });
    });
});
module.exports = router;