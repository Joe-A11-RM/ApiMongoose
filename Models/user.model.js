let mongoose = require('mongoose')
let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model("User", UserSchema)