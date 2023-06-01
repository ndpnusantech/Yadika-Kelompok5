import {Sequelize} from "sequelize";
import db from "../../config/RentDb.js";

const {DataTypes} = Sequelize;

const CarsBeside = db.define('img_cars_beside', {
    part: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    freezeTableName: true,
  });
  

export default CarsBeside;

(async()=>{
    await db.sync();
})();