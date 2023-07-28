import CarsImg from "../models/img_cars_model.js";
import path from "path";
import fs from "fs";

export const getCarsImg = async (req, res) => {
  try {
    const response = await CarsImg.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCarsImgById = async (req, res) => {
  try {
    const response = await CarsImg.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveCarsImg = async (req, res) => {
  const name_cars = req.body.title;
  if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
  const allowedType = [".png", ".jpg", ".jpeg"];

  try {
    // Process "img_above"
    const img_above = req.files.img_above;
    const file_sizeAbove = img_above.data.length;
    const ext_above = path.extname(img_above.name);
    const file_name_above = img_above.md5 + ext_above;
    const img_above_url = `${req.protocol}://${req.get("host")}/images/${file_name_above}`;

    if (!allowedType.includes(ext_above.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (file_sizeAbove > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });
    await img_above.mv(`./public/images/${file_name_above}`);

    // Process "img_under"
    const img_under = req.files.img_under;
    const file_size_under = img_under.data.length;
    const ext_under = path.extname(img_under.name);
    const file_name_under = img_under.md5 + ext_under;
    const img_under_url = `${req.protocol}://${req.get("host")}/images/${file_name_under}`;

    if (!allowedType.includes(ext_under.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (file_size_under > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });
    await img_under.mv(`./public/images/${file_name_under}`);

    // Process "img_front"
    const img_front = req.files.img_front;
    const file_size_front = img_front.data.length;
    const ext_front = path.extname(img_front.name);
    const file_name_front = img_front.md5 + ext_front;
    const img_front_url = `${req.protocol}://${req.get("host")}/images/${file_name_front}`;

    if (!allowedType.includes(ext_front.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (file_size_front > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    await img_front.mv(`./public/images/${file_name_front}`);

    // Process "img_beside"
    const img_beside = req.files.img_beside;
    const file_size_beside = img_beside.data.length;
    const ext_beside = path.extname(img_beside.name);
    const file_name_beside = img_beside.md5 + ext_beside;
    const img_beside_url = `${req.protocol}://${req.get("host")}/images/${file_name_beside}`;

    if (!allowedType.includes(ext_beside.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (file_size_beside > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    await img_beside.mv(`./public/images/${file_name_beside}`);

    // Save information to the database
    await CarsImg.create({
      name_cars: name_cars,
      img_above: file_name_above,
      img_above_url: img_above_url,
      img_under: file_name_under,
      img_under_url: img_under_url,
      img_front: file_name_front,
      img_front_url: img_front_url,
      img_beside: file_name_beside,
      img_beside_url: img_beside_url,
    });

    res.status(201).json({ msg: "Images Created Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const updateCarsImg = async (req, res) => {
  const { id } = req.params;
  const name_cars = req.body.title;

  try {
    const existingCarsImg = await CarsImg.findByPk(id);
    if (!existingCarsImg)
      return res.status(404).json({ msg: "Cars Image not found" });

    if (req.files === null)
      return res.status(400).json({ msg: "No File Uploaded" });

    const allowedType = [".png", ".jpg", ".jpeg"];

    const updateImage = async (table, path, url) => {
      const image = req.files[table];
      const file_size = image.data.length;
      const ext = path.extname(image.name);
      const file_name = image.md5 + ext;
      const image_url = `${req.protocol}://${req.get("host")}/images/${file_name}`;

      if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
      if (file_size > 5000000)
        return res.status(422).json({ msg: "Image must be less than 5 MB" });

      await image.mv(`./public/images/${file_name}`);
      existingCarsImg[path] = file_name;
      existingCarsImg[url] = image_url;
    };

    await updateImage("img_above", "img_above", "img_above_url");
    await updateImage("img_under", "img_under", "img_under_url");
    await updateImage("img_front", "img_front", "img_front_url");
    await updateImage("img_beside", "img_beside", "img_beside_url");

    existingCarsImg.name_cars = name_cars;
    await existingCarsImg.save();

    res.status(200).json({ msg: "Cars Image Updated Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const deleteCarsImg = async (req, res) => {
  const { id } = req.params;

  try {
    const existingCarsImg = await CarsImg.findByPk(id);
    if (!existingCarsImg)
      return res.status(404).json({ msg: "Cars Image not found" });

    // Hapus file gambar dari sistem file
    const imagePaths = [
      existingCarsImg.img_above,
      existingCarsImg.img_under,
      existingCarsImg.img_front,
      existingCarsImg.img_beside,
    ];

    imagePaths.forEach((imagePath) => {
      const filePath = `./public/images/${imagePath}`;
      fs.unlinkSync(filePath);
    });

    // Hapus data gambar dari database
    await existingCarsImg.destroy();

    res.status(200).json({ msg: "Cars Image Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
