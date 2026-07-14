const { getMoonSign } = require("../services/astrologyApi.service");

const moonSign = async (req, res) => {
  try {
    const data = await getMoonSign(req.body);

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("Controller Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  moonSign,
};