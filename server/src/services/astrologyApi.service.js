const axios = require("axios");
const { ASTROLOGY_API_KEY } = require("../config/env");
const { getCoordinates } = require("./geocoder.service");

const BASE_URL = "https://vedintelastroapi.com/api/v1";

const getMoonSign = async ({ dob, tob, place }) => {
  try {
    // Convert YYYY-MM-DD → DD/MM/YYYY
    const [year, month, day] = dob.split("-");
    const formattedDob = `${day}/${month}/${year}`;

    // Get latitude & longitude
    const location = await getCoordinates(place);

    // Call VedIntel API
    const response = await axios.get(
      `${BASE_URL}/extended-horoscope/find-moon-sign`,
      {
        params: {
          api_key: ASTROLOGY_API_KEY,
          dob: formattedDob,
          tob,
          lat: location.latitude,
          lon: location.longitude,
          tz: 5.5,
          lang: "en",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("VedIntel Error:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch moon sign"
    );
  }
};

module.exports = {
  getMoonSign,
};