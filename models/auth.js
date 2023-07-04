const Sequelize = require("sequelize");
const database = require("../config/database");

const Auth = database.define('auth', {
    username: {
        type : Sequelize.STRING,
        allowNull : false
    },
    email: {
        type :Sequelize.STRING, //email can be up to 2
        unique : true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        default: new Date()
    }
});

module.exports =  Auth;