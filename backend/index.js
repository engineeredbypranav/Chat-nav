const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const http = require('http')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || process.env.API_PORT

app.use(express.json())
app.use(cors())

// Routes
app.use('/api/auth', authRoutes)

const server = http.createServer(app)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {console.log('Database connected')
        server.listen(PORT , () => {
        console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log("Database connection failed", err))