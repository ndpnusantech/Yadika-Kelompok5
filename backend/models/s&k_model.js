import { Sequelize } from "sequelize";
import db from "../config/RentDb.js";

const { DataTypes } = Sequelize;

const s_k = db.define(
  "s_k",
  {
    id_user: DataTypes.INTEGER,
    ktp: DataTypes.STRING,
    bpjs: DataTypes.STRING,
    pasport: DataTypes.STRING,
    mwmp: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default s_k;

(async () => {
  await db.sync();
})();
