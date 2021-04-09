const express = require('express')
const app = express()
const port = 3000

//test home route
app.get('/', (req, res) => {
    res.send('Test hello')
})

//controllers
app.use('/users', require('/users'))
app.use('/books', require('/books'))
app.use('/favorites', require('/favorites'))

//port listener
app.listen(port, () => {
    console.log('server up and running!')
})