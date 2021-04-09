const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const fs = require('fs')

const url = 'http://gutendex.com/books?languages=en&copyright=false&author_year_end=-50'
async function getBooks() {
    const books = await axios.get(url)
    let bookJSON = ''
    for (let i = 0; i < books.data.results.length; i++) {
        bookJSON += `    "${i}": { "title": "${books.data.results[i].title}" },\n`
    }
    const allBooks = `{\n${bookJSON.slice(0, -2)}\n}`
    fs.writeFile('seeder.json', allBooks, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

getBooks()


app.get('/', (req, res) => {
    res.send('Test hello')
})

app.listen(port, () => {
    console.log('server up and running!')
})