import express from "express";
import {
    getCasrAbove,
    getCasrAboveById,
    saveCasrAbove,
    updateCasrAbove,
    deleteCasrAbove
} from "../../controllers/cars_img_controllers/img_cars_above.js";

const router = express.Router();

router.get('/carsAbove', getCasrAbove);
router.get('/carsAbove/:id', getCasrAboveById);
router.post('/carsAbove', saveCasrAbove);
router.patch('/carsAbove/:id', updateCasrAbove);
router.delete('/carsAbove/:id', deleteCasrAbove);

export default router;