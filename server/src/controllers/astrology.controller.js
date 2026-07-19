const { getMoonSign } = require("../services/astrologyApi.service");
const {
  generateAstrologyExplanation,
} = require("../services/gemini.service");

const moonSign = async (req, res) => {
  try {
    // Get astrology data from VedIntel
    const data = await getMoonSign(req.body);

    // Gemini explanation (optional)
    let aiExplanation = "";

    try {
      aiExplanation = await generateAstrologyExplanation(data);
    } catch (geminiError) {
      console.error("Gemini Error:", geminiError.message);

      aiExplanation =
        "AI explanation is temporarily unavailable. Please try again later.";
    }

    res.status(200).json({
      success: true,
      data,
      aiExplanation,
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