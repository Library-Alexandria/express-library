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
        bookJSON += `{\n    "title": "${books.data.results[i].title}"\n},\n`
    }
    const trimmedObjects = bookJSON.slice(0, -2)
    const arrayWrapped = `[${trimmedObjects}]`
    fs.writeFile('seeder.json', arrayWrapped, (err) => {
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