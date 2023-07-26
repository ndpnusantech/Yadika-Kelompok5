import CarsProf from "../models/cars_porf_model.js";

export const getCarsProf = async (req, res) => {
  try {
    const response = await CarsProf.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCarsProfById = async (req, res) => {
  try {
    const response = await CarsProf.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createCarsProf = async (req, res) => {
  try {
    const { id_img, color, car_name, car_brand, plat, gps, km_liter, model, price, fuel, status } = req.body;
    const missingFields = [];

    if (!id_img) missingFields.push("id_img");
    if (!color) missingFields.push("color");
    if (!car_name) missingFields.push("car_name");
    if (!car_brand) missingFields.push("car_brand");
    if (!plat) missingFields.push("plat");
    if (!gps) missingFields.push("gps");
    if (!km_liter) missingFields.push("km_liter");  
    if (!model) missingFields.push("model");
    if (!price) missingFields.push("price");
    if (!fuel) missingFields.push("fuel");
    if (status === undefined) missingFields.push("status");

    if (missingFields.length > 0) {
      res.status(400).json({ error: `Missing required fields: ${missingFields.join(", ")}` });
    } else {
      await CarsProf.create(req.body);
      res.status(201).json({ msg: "Car created" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const updateCarsProf = async (req, res) => {
  try {
    const { id_img, color, car_name, car_brand, plat, gps, km_liter, model, price, fuel, status } = req.body;
    const missingFields = [];

    if (!id_img) missingFields.push("id_img");
    if (!color) missingFields.push("color");
    if (!car_name) missingFields.push("car_name");
    if (!car_brand) missingFields.push("car_brand");
    if (!plat) missingFields.push("plat");
    if (!gps) missingFields.push("gps");
    if (!km_liter) missingFields.push("km_liter");
    if (!model) missingFields.push("model");
    if (!price) missingFields.push("price");
    if (!fuel) missingFields.push("fuel");
    if (status === undefined) missingFields.push("status");

    if (missingFields.length > 0) {
      res.status(400).json({ error: `Missing required fields: ${missingFields.join(", ")}` });
    } else {
      const car = await CarsProf.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (car) {
        await CarsProf.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json({ msg: "Car updated" });
      } else {
        res.status(404).json({ error: "Car not found" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCarsProf = async (req, res) => {
  try {
    const car = await CarsProf.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (car) {
      await CarsProf.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Car deleted" });
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
