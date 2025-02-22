const {  Model, DataTypes } = require('sequelize')
const db = require('../db/db')

class Board extends Model {}

Board.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },    
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER
    }
}, {sequelize: db})

module.exports = Board