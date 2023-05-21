const Sequelize = require('sequelize')
const db = require("../config/databaseRent.js");


const { DataTypes } = Sequelize;

const Car = db.define(
  "cars",
  {
    id_img: DataTypes.INTEGER,
    color: DataTypes.STRING,
    car_name: DataTypes.STRING,
    car_brand: DataTypes.STRING,
    plat: DataTypes.STRING,
    km_liter: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.FLOAT,
    fuel: DataTypes.STRING,
    gps: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = Car;
