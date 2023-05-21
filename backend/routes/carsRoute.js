import express from "express";
import { getCars } from "../controllers/carsController.js";

const router = express.Router();

router.get("/cars", getCars);

export default router;
