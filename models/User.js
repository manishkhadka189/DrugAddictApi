const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username : {
       type : String,
   },
    email : {
        type : String
    },
    password : {
        type : String,
    },
    gender : {
        type : String
    },
    drug : {
        type : Schema.Types.ObjectId,
        ref :'drug'
    }

})


const User = mongoose.model('user', UserSchema);
module.exports = User;