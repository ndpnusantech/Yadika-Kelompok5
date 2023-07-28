import express from "express";
import { getCheckouts, getCheckoutById, createCheckout, updateCheckout, deleteCheckout } from "../controllers/checkout_controller.js";

const router = express.Router();

router.get("/checkouts", getCheckouts);
router.get("/checkouts/:id", getCheckoutById);
router.post("/checkouts", createCheckout);
router.patch("/checkouts/:id", updateCheckout);
router.delete("/checkouts/:id", deleteCheckout);

export default router;
