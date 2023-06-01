import express from "express";
import {
    getCasrBeside,
    getCasrBesideById,
    saveCasrBeside,
    updateCasrBeside,
    deleteCasrBeside
} from "../../controllers/cars_img_controllers/img_cars_beside.js";

const router = express.Router();

router.get('/carsBeside', getCasrBeside);
router.get('/carsBeside/:id', getCasrBesideById);
router.post('/carsBeside', saveCasrBeside);
router.patch('/carsBeside/:id', updateCasrBeside);
router.delete('/carsBeside/:id', deleteCasrBeside);

export default router;