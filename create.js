const axios = require('axios')
const fs = require('fs')

const url = 'http://gutendex.com/books?languages=en&copyright=false&author_year_end=-50'

async function getBooks() {
    let bookJSON = ''
    const books1 = await axios.get(url)
    const books2 = await axios.get(url + '&page=2')
    const books3 = await axios.get(url + '&page=3')
    const books4 = await axios.get(url + '&page=4')
    const books5 = await axios.get(url + '&page=5')
    const books6 = await axios.get(url + '&page=6')
    for (const book of books1.data.results) {
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
    for (const book of books2.data.results) {
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
    for (const book of books3.data.results) {
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
    for (const book of books4.data.results) {
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
    for (const book of books5.data.results) {
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
    for (const book of books6.data.results) {
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
    const trimmedObjects = bookJSON.slice(0, -2)
    const arrayWrapped = `[${trimmedObjects}]`
    fs.writeFile('seeder.js', arrayWrapped, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

getBooks()