

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true,
        uniquue: true
    },
    price:{
        type: Number,
        required: true
    }
});

const user = mongoose.model("user", userSchema);
module.exports = user;