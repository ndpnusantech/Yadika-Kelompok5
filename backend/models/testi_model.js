import { Sequelize } from "sequelize";
import db from "../config/RentDb.js";

const { DataTypes } = Sequelize;

const Testimonial = db.define(
    "testimoni",
    {
     testi_message:DataTypes.STRING
    },
    {
      freezeTableName: true,
    }
  );
  
  export default Testimonial;
  
  (async () => {
    await db.sync();
  })();
