import Cars from "../models/carModel.js";

export const getCars = async (req, res) => {
  try {
    const response = await Cars.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCarsById = async (req, res) => {
  try {
    const response = await Cars.findOne({
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

export const createCars = async (req, res) => {
  try {
    await Cars.create(req.body);
    res.status(201).json({ msg: "Car created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateCars = async (req, res) => {
  try {
    const car = await Cars.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (car) {
      await Cars.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Car updated" });
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCars = async (req, res) => {
  try {
    const car = await Cars.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (car) {
      await Cars.destroy({
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
