const axios = require('axios')
const fs = require('fs')

const url = 'http://gutendex.com/books?languages=en&copyright=false&author_year_end=-50'

async function getBooks() {
    let bookJSON = ''

    async function getResults(requestUrl) {
        console.log(`RESQUEST URL: ${requestUrl}`)
        let books = await axios.get(requestUrl)
        for (const book of books.data.results) {
            let subjects = book.subjects
            let subjectsString = ''
            for (const subject of subjects) {
                subjectsString += `${subject}, `
            }
            let formats = Object.keys(book.formats)
            let formatText = ''
            for (const format of formats) {
                if (format.startsWith('text/html')) {
                    formatText = format
                }
            }
            let trimmedSubjects = subjectsString.slice(0, -2)
            bookJSON += `{\n    title: "${book.title.replace(/"/g, '')}",\n    author: "${book.authors[0].name}",\n    subjects: "${trimmedSubjects}",\n    image: "${book.formats['image/jpeg']}",\n    text: "${book.formats[formatText]}",\n    createdAt: new Date(),\n    updatedAt: new Date()\n},\n`
        }
        // console.log(`INITIAL SLICES: ${bookJSON.slice(0, 50)}`)
        console.log(`BOOKS.DATA.NEXT: ${books.data.next}`)
        if (books.data.next) {
            getResults(books.data.next)
        }
        // console.log(`FINAL: ${bookJSON}`)
    }

    getResults(url)

    const trimmedObjects = bookJSON.slice(0, -2)
    const arrayWrapped = `[${trimmedObjects}]`
    fs.writeFile('seeder.js', arrayWrapped, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

getBooks()