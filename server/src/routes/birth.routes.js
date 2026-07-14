const express = require("express");
const router = express.Router();

router.post("/details", (req, res) => {
    const {
        name,
        dateOfBirth,
        timeOfBirth,
        place,
        latitude,
        longitude,
        timezone
    } = req.body;

    res.json({
        success: true,
        message: "Birth details received",
        data: {
            name,
            dateOfBirth,
            timeOfBirth,
            place,
            latitude,
            longitude,
            timezone
        }
    });
});

module.exports = router;