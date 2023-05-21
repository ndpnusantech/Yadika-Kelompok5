const express = require("express");
const { getCars, getCarsById } = require("../controllers/carController");

const router = express.Router();

router.get("/cars", getCars);
router.get("/cars/:id", getCarsById);

module.exports = router;
