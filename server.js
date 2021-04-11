const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

//middleware
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

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