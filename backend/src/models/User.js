const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: String,
    password: String
},{
    timestamps: true // add 2 fields more createdup & updateup
});

module.exports = model('User',userSchema); //create a model (nameofmodel, schema)