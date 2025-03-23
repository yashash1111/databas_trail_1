const { json } = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const {resolve} = require('path');
const userSchema = require("./schema")
const app = express();
PORT = 3010;
require('dotenv').config;

// app.use(express.static('static'));
app.use(express.json());

mongoose.connect('url')
.then(console.log("Connected to MongoDB"))
.catch((err)=>console.log("Error connecting to mongo DB"))

app.listen(PORT, ()=>{
    console.log(`Server is running in https://localhost:${PORT}`);
})

app.post('/api/users/', (req, res)=>{
    try{
        const {name, email, passward} = req.body;

        if(!name || !email || !passward){
            return res.status(400).send("All fields are required");
        }
        const newUser = new mongooseSchema ({name, description, price })
        newUser.save();

        console.log(newUser);
        res.status(200).send("Added item succesfully");
    }
    catch(err){
        res.status(500).send("Internal server Error");   
    }
})