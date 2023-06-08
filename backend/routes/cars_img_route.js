import express from "express";
import { getCarsImg, saveCarsImg, updateCarsImg, deleteCarsImg, getCarsImgById } from '../controllers/img_cars_controller.js';

const router = express.Router();

router.get("/http://localhost:5000carsImg", getCarsImg);
router.get("/carsImg/:id", getCarsImgById);
router.post("/carsImg", saveCarsImg);
router.patch("/carsImg/:id", updateCarsImg);
router.delete("/carsImg/:id", deleteCarsImg);

export default router;
