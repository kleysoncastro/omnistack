const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema({

    email: String,

});// fim userSchema

module.exports = mongoose.model('User', UserSchema);