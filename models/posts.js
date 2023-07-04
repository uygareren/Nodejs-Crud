const Sequelize = require("sequelize");
const database = require("../config/database");

const Posts = database.define('posts', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Posts;
