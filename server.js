const express = require('express')
const app = express()
const port = 3000

//test home route
app.get('/', (req, res) => {
    res.send('Test hello')
})

//middleware
app.use(express.urlencoded({ extended: false }));

//controllers
app.use('/users', require('./routes/users'))
app.use('/books', require('./routes/books'))
app.use('/favorites', require('./routes/favorites'))

//port listener
app.listen(port, () => {
    console.log('server up and running!')
})