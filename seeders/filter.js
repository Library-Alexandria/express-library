const fs = require('fs')
const books = require('./data')
const fakes = require('./fakes')

books.sort((first, second) => {
    if (first.title < second.title) {
        return -1
    } else {
        return 1
    }
})

for (let i = 0; i < books.length - 1; i++) {
    if (books[i].title === books[i + 1].title) {
        books.splice(i + 1, 1)
    }
}

let stringBooks = ''

for (const book of books) {
    stringBooks += `            {\n                title: "${book.title}",\n                author: "${book.author}",\n                subjects: "${book.subjects}",\n                image: "${book.image}",\n                text: "${book.text}",\n                createdAt: new Date(),\n                updatedAt: new Date()\n            },\n`
}

for (const book of fakes) {
    stringBooks += `            {\n                title: "${book.title}",\n                author: "${book.author}",\n                subjects: "${book.subjects}",\n                image: "${book.image}",\n                text: "${book.text}",\n                createdAt: new Date(),\n                updatedAt: new Date()\n            },\n`
}

const trimmedObjects = stringBooks.slice(0, -2)

const arrayWrapped = `'use strict'\n\n module.exports = {\n    up: async (queryInterface, Sequelize) => {\n        return queryInterface.bulkInsert('features', [\n${trimmedObjects}\n        ], {})\n    }\n}`

fs.writeFile('seeders/books.js', arrayWrapped, (err) => {
    if (err) {
        console.log(err)
    }
})