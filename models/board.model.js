const { dataType, Model, DataTypes } = require('sequelize')
const db = require('../db/db')

class Board extends Model {}

Board.init({
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
})

module.exports = Board