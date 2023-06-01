import { Sequelize } from "sequelize";
import db from "../config/RentDb.js";

const { DataTypes } = Sequelize;

const CarsProf = db.define(
  "cars_profile",
  {
    id_img: DataTypes.INTEGER,
    color: DataTypes.STRING,
    car_name: DataTypes.STRING,
    car_brand: DataTypes.STRING,
    plat: DataTypes.STRING,
    gps: DataTypes.STRING,
    km_liter: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.FLOAT,
    fuel: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

export default CarsProf;

(async () => {
  await db.sync();
})();
