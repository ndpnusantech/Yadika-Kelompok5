import express from "express";
import {
  getS_K,
  getS_KById,
  createS_K,
  deleteS_K,
} from "../controllers/s&k_controller.js";

const router = express.Router();

router.get("/s_k", getS_K);
router.get("/s_k/:id_s_k", getS_KById);
router.post("/s_k", createS_K);
// router.patch("/s_k/:id_s_k", updateS_K);
router.delete("/s_k/:id_s_k", deleteS_K);

export default router;