const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

const photometadata = require('./requests/photometadata')
const getphotobyid = require('./requests/getphoto')
app.use(morgan('tiny'))

app.use(express.static(__dirname + '/../assets')) 

app.get('/photos',photometadata)

app.get('/photos/:id',getphotobyid)

const server = app.listen(3000,()=>{
    console.log('Starting server on port 3000')
})