const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrugSchema = new Schema({
    Drugname : {
        type : String,
    },

    Drugimage : {
        type : String,
    },

    Drugdiscription : {
        type : String,
    }
})

const Drug = mongoose.model('drug', DrugSchema);
module.exports = Drug;