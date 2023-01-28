// original show route
Collection.findById(req.params.id, (err, foundCollection) => {
    res.render("show-collection.ejs", {
        collection: foundCollection,
        title: "Collection"
    })
})