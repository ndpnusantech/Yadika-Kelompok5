import { Sequelize, DataTypes } from 'sequelize';
import db from "../config/RentDb.js";
import CarsProf from './cars_porf_model.js';

const Checkout = db.define('checkouts', {
  check_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  profilMobil_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  namaAnda: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  tanggalPinjam: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tanggalKembali: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalHarga: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  uangMuka: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false    
  },
  pDana: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  pDebit: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  pOvo: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  buktiPembayaran: {
    type: DataTypes.STRING,
    allowNull: true
  },
  diskon: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: true
  },
  statusPemesanan: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

Checkout.belongsTo(CarsProf, { foreignKey: 'profilMobil_id', as: 'mobil_profile' });

export default Checkout;
