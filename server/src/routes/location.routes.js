const express = require("express");
const router = express.Router();

const { getCoordinates } = require("../services/geocoder.service");

router.get("/search", async (req, res) => {
    try {
        const { place } = req.query;

        if (!place) {
            return res.status(400).json({
                success: false,
                message: "Place is required"
            });
        }

        const location = await getCoordinates(place);

        res.json({
            success: true,
            data: location
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
console.log("Location routes loaded");

module.exports = router;