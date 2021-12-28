const mongoose = require('mongoose')

const mongooseURI = 'mongodb://localhost:27017/usersFF'

const db = mongoose.connection 

mongoose.connect(mongooseURI)

// Extra Error,Success

db.on('error',err=>{
    console.log('Error connect MongoDB')
})

db.on('connected',()=>{
    console.log('MongoDB is connected')
})