import {Sequelize} from "sequelize";
import db from "../../config/RentDb.js";

const {DataTypes} = Sequelize;

const CarsFront = db.define('img_cars_front', {
    part: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    freezeTableName: true,
  });
  

export default CarsFront;

(async()=>{
    await db.sync();
})();