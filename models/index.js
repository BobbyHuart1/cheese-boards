const Board = require("./board.model");
const Cheese = require("./cheese.model");
const User = require("./user.model");

User.hasMany(Board)
Board.belongsTo(User)

Board.belongsToMany(Cheese, {through: 'Board_cheese' })
Cheese.belongsToMany(Board, {through: 'Board_cheese' })

module.exports = {Board, Cheese, User}