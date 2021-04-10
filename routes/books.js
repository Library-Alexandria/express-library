const express = require("express");
const router = express.Router();
const models = require("../models");
// const user = require("../models/user");

router.get("/:author", async (req, res) => {
    models.User.findAll({
        where: {
            author: req.params.author
        }
    }).then((books) => {
        res.send(books)
        console.log(books)
    }).catch((err) => res.send(err))

})

module.exports = router;