const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quotesschema = new Schema({
    userid : {
        type : Schema.Types.ObjectId,
        ref:"user",
    },

    quotesdiscription : {
        type : String,
    }
})

const Quotes = mongoose.model('quotes', Quotesschema);
module.exports = Quotes;