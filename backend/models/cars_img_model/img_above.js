import { Sequelize } from "sequelize";
import db from "../../config/RentDb.js";

const { DataTypes } = Sequelize;

const CarsUnder = db.define('img_cars_above', {
  part: DataTypes.STRING,
  image: DataTypes.STRING,
  url: DataTypes.STRING,
}, {
  freezeTableName: true,
});

export default CarsUnder;

(async () => {
  await db.sync();
})();