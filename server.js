const express = require('express')
const app = express()

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

// Create port
const PORT = process.env.PORT || 8000

// Create server to listen on port
const server = app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})