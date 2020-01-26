const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Inspirationschema = new Schema({
    userid : {
        type : Schema.Types.ObjectId,
        ref:"user",
    },

    inspirationdiscription : {
        type : String,
    }
})

const Inspiration = mongoose.model('inspiration', Inspirationschema);
module.exports = Inspiration;