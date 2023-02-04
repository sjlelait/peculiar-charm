
// show page not using
router.get("/collections/:collectionId/:id", (req, res) => {    
    Piece.findById({ _id: req.params.id })
    .populate("collection").exec((err, piece) => {
        res.render("show-collection.ejs", {
            Piece: piece,
            title: "Collection"
        });
    }); 
});


/// edit piece for collection page
<a href="/collections/<%= collection._id %>/<%= piece._id %>/edit"><button>Edit This Piece</button></a>