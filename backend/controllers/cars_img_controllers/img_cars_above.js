import CarsAbove from "../../models/cars_img_model/img_above.js";
import path from "path";
import fs from "fs";

export const getCasrAbove = async(req, res)=>{
    try {
        const response = await CarsAbove.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCasrAboveById = async(req, res)=>{
    try {
        const response = await CarsAbove.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveCasrAbove = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const part = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await CarsAbove.create({part: part, image: fileName, url: url});
            res.status(201).json({msg: "Img Above Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateCasrAbove = async (req, res) => {
    const carsAbove = await CarsAbove.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!carsAbove) return res.status(404).json({ msg: "No Data Found" });
  
    let fileName = "";
    if (req.files === null) {
      fileName = carsAbove.image;
    } else {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];
  
      if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
      if (fileSize > 5000000)
        return res.status(422).json({ msg: "Image must be less than 5 MB" });
  
      const filepath = `./public/images/${carsAbove.image}`;
      fs.unlinkSync(filepath);
  
      file.mv(`./public/images/${fileName}`, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }
    const part = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  
    try {
      await CarsAbove.update(
        { part: part, image: fileName, url: url },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ msg: "Img Above Updated Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  };
  

  export const deleteCasrAbove = async (req, res) => {
    const carsAbove = await CarsAbove.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!carsAbove) return res.status(404).json({ msg: "No Data Found" });
  
    try {
      const filepath = `./public/images/${carsAbove.image}`;
      fs.unlinkSync(filepath);
      await CarsAbove.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Img Above Deleted Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  };
  