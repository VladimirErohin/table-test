const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Infos = sequelize.define('infos',{
    data:{type:DataTypes.STRING},
    title:{type: DataTypes.STRING},
    amount:{type: DataTypes.STRING},
    distance:{type: DataTypes.STRING}

});

module.exports = {
    Infos
};