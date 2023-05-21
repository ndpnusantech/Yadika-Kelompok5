const Sequelize = require("sequelize");

const db = new Sequelize("cars_db", "root", "", {
    host:'localhost',
    dialect:'mysql'
});
module.exports = db;