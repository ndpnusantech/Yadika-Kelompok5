import { Sequelize, DataTypes } from 'sequelize';
import db from "../config/RentDb.js"; //file konfigurasi koneksi ke basis data


const User = db.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  no_telp: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  user_password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  user_img: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
});

export default User;
