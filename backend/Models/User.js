const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
  
    
 
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
   
    password: {
        type: String,
        required: true,
        minlength: 6
    },

 dni: {
       type: Number,
        required: true,
        min: 20000000,
        max: 70000000
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);