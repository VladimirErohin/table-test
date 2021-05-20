const ApiError = require('../error/ApiError');
const {Infos} = require('../model/model')

class DataController {

    async create(req, res) {
        let {data,title,amount,distance} = req.body;
        const type = await Infos.create({data,title,amount,distance});
        return res.json(type)
    }
    async getAll(req, res) {
        let {data,title,amount,distance, limit, page} = req.query;

        page = page || 1;
        limit = limit || 4;
        let offset = page * limit - limit;

        const datas = await Infos.findAndCountAll({limit, offset});
        return res.json(datas)
    }
}

module.exports = new DataController();