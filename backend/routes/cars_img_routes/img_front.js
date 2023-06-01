import express from "express";
import {
    getCasrFront,
    getCasrFrontById,
    saveCasrFront,
    updateCasrFront,
    deleteCasrFront
} from "../../controllers/cars_img_controllers/img_cars_front.js";

const router = express.Router();

router.get('/carsFront', getCasrFront);
router.get('/carsFront/:id', getCasrFrontById);
router.post('/carsFront', saveCasrFront);
router.patch('/carsFront/:id', updateCasrFront);
router.delete('/carsFront/:id', deleteCasrFront);

export default router;