import express from "express";
import {
    getCasrUnder,
    getCasrUnderById,
    saveCasrUnder,
    updateCasrUnder,
    deleteCasrUnder
} from "../../controllers/cars_img_controllers/img_cars_under.js";

const router = express.Router();

router.get('/carsUnder', getCasrUnder);
router.get('/carsUnder/:id', getCasrUnderById);
router.post('/carsUnder', saveCasrUnder);
router.patch('/carsUnder/:id', updateCasrUnder);
router.delete('/carsUnder/:id', deleteCasrUnder);

export default router;