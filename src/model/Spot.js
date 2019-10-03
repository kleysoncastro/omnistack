const mongoose =  require('mongoose')

const SpotSchema = new mongoose.Schema({

    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {
// habilita criacao virtal que 
    toJSON: {
        virtuals: true
    }

});// fim SpotSchema


// cria uma rota virtual juntando o localhost e thumbnail
SpotSchema.virtual('thumbnail_url').get(function(){

    return `http://192.168.0.9:3333/files/${this.thumbnail}`

});

module.exports = mongoose.model('Spot', SpotSchema);