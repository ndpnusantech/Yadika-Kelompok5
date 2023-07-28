import { Sequelize } from "sequelize";
import db from "../config/RentDb.js";
import CarsImg from "./img_cars_model.js";

const { DataTypes } = Sequelize;

const CarsProf = db.define(
  "cars_profile",
  {
    id_img: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
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

// Definisi asosiasi dengan CarsImg
CarsProf.belongsTo(CarsImg, { foreignKey: "id_img", as: "car_image" });

export default CarsProf;
