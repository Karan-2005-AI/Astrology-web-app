require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,

  ASTROLOGY_API_KEY: process.env.ASTROLOGY_API_KEY,

  GEMINI_API_KEY: process.env.GEMINI_API_KEY,

  OPENCAGE_API_KEY: process.env.OPENCAGE_API_KEY,
};