const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

module.exports = sequelize


//connect to postgres
