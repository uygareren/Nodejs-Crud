const Sequelize  = require('sequelize');

const sequelize = new Sequelize('node-app3', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;