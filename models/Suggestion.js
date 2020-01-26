const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Suggestionschema = new Schema({
   drugid : {
        type : Schema.Types.ObjectId,
        ref:"drug",
    },

   Suggestion: {
        type : [String],
    }
})

const Suggestion = mongoose.model('suggestion', Suggestionschema);
module.exports = Suggestion;