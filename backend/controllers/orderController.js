const fetchCategories = (req, res) => {
    db.categories.find((err, docs) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.status(200).json({ message: "Categories fetched successfully", data: docs });
        }
    })
}
