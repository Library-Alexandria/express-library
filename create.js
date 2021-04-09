const axios = require('axios')
const fs = require('fs')

const url = 'http://gutendex.com/books?languages=en&copyright=false&author_year_end=-50'

async function getBooks() {
    const books = await axios.get(url)
    let bookJSON = ''
    for (const book of books.data.results) {
        let subjects = book.subjects
        let subjectsString = ''
        for (const subject of subjects) {
            subjectsString += `${subject}, `
        }
        let trimmedSubjects = subjectsString.slice(0, -2)
        bookJSON += `{\n    title: "${book.title}",\n    author: "${book.authors[0].name}",\n    subjects: "${trimmedSubjects}",\n    image: "${book.formats['image/jpeg']}",\n    text: "${book.formats['text/html; charset=utf-8']}",\n    createdAt: new Date(),\n    updatedAt: new Date()\n},\n`
    }
    const trimmedObjects = bookJSON.slice(0, -2)
    const arrayWrapped = `[${trimmedObjects}]`
    fs.writeFile('seeder.js', arrayWrapped, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

getBooks()