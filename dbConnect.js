const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ashwinikj16:Behappy@cluster0.w9y9bjq.mongodb.net/sheymoney-udemy' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))