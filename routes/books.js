const express = require("express")
const router = express.Router()
const models = require("../models")
const axios = require('axios')

router.get("/search/:author", async (req, res) => {
    try {
        const foundBooks = await models.book.findAll({
            where: {
                author: req.params.author
            }
        })
        res.status(200).json({ books: foundBooks })
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

router.get("/text/:id", async (req, res) => {
    try {
        const foundBook = await models.book.findByPk(
            req.params.id
        )
        const foundText = await axios.get(foundBook.text)
        res.status(200).json({ text: foundText.data })
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

module.exports = router