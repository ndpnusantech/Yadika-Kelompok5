import express from "express";
import { getCarsProf, createCarsProf, updateCarsProf, deleteCarsProf, getCarsProfById } from "../controllers/cars_prof_controller.js";

const router = express.Router();

router.get("/cars", getCarsProf);
router.get("/cars/:id", getCarsProfById);
router.post("/cars", createCarsProf);
router.patch("/cars/:id", updateCarsProf);
router.delete("/cars/:id", deleteCarsProf);

export default router;
