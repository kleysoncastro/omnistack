const Spot = require('../model/Spot');
const User =  require('../model/User')
module.exports = {

    async index(req, res) {
        const { tech } = req.query;
        const spots = await Spot.find({techs: tech});

        return res.json(spots);

    },// fim index



    async store(req, res) {
    const {filename} = req.file;
    const {company, techs, price} = req.body;
    const {user_id} = req.headers;

    const user =  await User.findById(user_id);

    if(!user) {
     return   res.status(400).json({erro: "Usuario nao encontrado"});
    }

    const spot = await Spot.create({
        thumbnail: filename,
        user: user_id,
        company,
        techs: techs.split(',').map(tech => tech.trim()),
        price

    });


        return res.json(spot)
    }

};