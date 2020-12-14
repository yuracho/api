const express = require('express')
const mongoose = require('mongoose')
const server = express()
const User = require('./models//User')
require('dotenv').config({path:'variables.env'});

server.get('/', (req, res) => {
    const newUser = new User();
    newUser.email = 'yuracho@gmail.com';
    newUser.name = 'yura';
    newUser.age = 30;
    newUser.save()
    .then((date) => {
        console.log(user);
        res.json({
            message: 'user created successfully'
        })
    })
    .catch((err) =>{
        res.json({
            message: 'user was not successfully created'
        })
    })
})
server.listen(3000, (err) => {
    if(err){
        return console.log(err);
    }else{
        mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true ,
            useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
        }, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log('connected to database successfully');
            }
        });
    }
})

