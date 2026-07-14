const express = require("express");
const router = express.Router();

const { moonSign } = require("../controllers/astrology.controller");

// POST /api/astrology/moon-sign
router.post("/moon-sign", moonSign);

module.exports = router;