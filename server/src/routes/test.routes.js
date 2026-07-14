const express = require("express");
const router = express.Router();

const { getMoonSign } = require("../services/astrologyApi.service");

router.get("/", async (req, res) => {
  try {
    const result = await getMoonSign({
      dob: "2005-09-28",
      tob: "15:00",
      place: "Bilaspur, Chhattisgarh",
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;