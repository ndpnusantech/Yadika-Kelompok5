import CarsProf from "../models/cars_porf_model.js";
import CarsImg from "../models/img_cars_model.js";

export const getCarsProf = async (req, res) => {
  try {
    const response = await CarsProf.findAll({
      include: {
        model: CarsImg,
        as: "car_image",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCarsProfById = async (req, res) => {
  try {
    const carId = req.params.id;
    const response = await CarsProf.findOne({
      where: { id: carId },
      include: { model: CarsImg, as: "car_image" },
    });

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Mobil tidak ditemukan" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};

export const createCarsProf = async (req, res) => {
  try {
    const {
      id_img,
      color,
      car_name,
      car_brand,
      plat,
      gps,
      km_liter,
      model,
      price,
      fuel,
      status,
    } = req.body;

    if (
      !id_img ||
      !color ||
      !car_name ||
      !car_brand ||
      !plat ||
      !gps ||
      !km_liter ||
      !model ||
      !price ||
      !fuel ||
      status === undefined
    ) {
      return res.status(400).json({
        error: "Kolom wajib kosong: id_img, color, car_name, car_brand, plat, gps, km_liter, model, price, fuel, status",
      });
    }

    await CarsProf.create({
      id_img,
      color,
      car_name,
      car_brand,
      plat,
      gps,
      km_liter,
      model,
      price,
      fuel,
      status,
    });

    res.status(201).json({ msg: "Mobil berhasil dibuat" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};

export const updateCarsProf = async (req, res) => {
  try {
    const { id_img, color, car_name, car_brand, plat, gps, km_liter, model, price, fuel, status } = req.body;

    if (
      !id_img ||
      !color ||
      !car_name ||
      !car_brand ||
      !plat ||
      !gps ||
      !km_liter ||
      !model ||
      !price ||
      !fuel ||
      status === undefined
    ) {
      return res.status(400).json({
        error: "Kolom wajib kosong: id_img, color, car_name, car_brand, plat, gps, km_liter, model, price, fuel, status",
      });
    }

    const car = await CarsProf.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ error: "Mobil tidak ditemukan" });
    }

    await car.update({
      id_img,
      color,
      car_name,
      car_brand,
      plat,
      gps,
      km_liter,
      model,
      price,
      fuel,
      status,
    });

    res.status(200).json({ msg: "Mobil berhasil diperbarui" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};

export const deleteCarsProf = async (req, res) => {
  try {
    const car = await CarsProf.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ error: "Mobil tidak ditemukan" });
    }

    await car.destroy();
    res.status(200).json({ msg: "Mobil berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};
