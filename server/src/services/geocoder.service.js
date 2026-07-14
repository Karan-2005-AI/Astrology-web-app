const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "openstreetmap",
};

const geocoder = NodeGeocoder(options);

const getCoordinates = async (place) => {
  try {
    const result = await geocoder.geocode(place);

    if (!result || result.length === 0) {
      throw new Error("Location not found");
    }

    return {
      latitude: result[0].latitude,
      longitude: result[0].longitude,
      city: result[0].city,
      state: result[0].state,
      country: result[0].country,
    };
  } catch (error) {
    throw new Error(`Geocoder Error: ${error.message}`);
  }
};

module.exports = {
  getCoordinates,
};