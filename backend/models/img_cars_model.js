import { Sequelize } from "sequelize";
import db from "../config/RentDb.js";

const { DataTypes } = Sequelize;

const CarsImg = db.define(
  "cars_img",
  {
    id_cars_img: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_cars: DataTypes.STRING,
    img_above: DataTypes.STRING,
    img_above_url: DataTypes.STRING,
    img_under: DataTypes.STRING,
    img_under_url: DataTypes.STRING,
    img_front: DataTypes.STRING,
    img_front_url: DataTypes.STRING,
    img_beside: DataTypes.STRING,
    img_beside_url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default CarsImg;
