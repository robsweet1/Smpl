const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./Routes/routes')
const path = require('path')
require('dotenv').config()


const port = process.env.PORT || 5000;
mongoose
    .connect(
        process.env.MONGO_URI, 
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => {
        const app = express()
        
        app.use(express.json({limit: '16mb'}))
        app.use(express.urlencoded({extended: true, limit: '16mb'}))
        app.use(cors())
        app.use('/api', routes)
        app.use(express.static(path.join(__dirname, 'Client', 'build')))

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'))
        })

        app.listen(port, () => {
            console.log('Server Running')
        })
    })