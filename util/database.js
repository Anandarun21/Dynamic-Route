const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Arunvenkat@74', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;