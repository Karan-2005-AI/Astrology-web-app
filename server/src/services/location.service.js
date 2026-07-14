const axios = require("axios");

async function getCoordinates(place) {
    const url = "https://maps.googleapis.com/maps/api/geocode/json";

    const response = await axios.get(url, {
        params: {
            address: place,
            key: process.env.GOOGLE_MAPS_API_KEY
        }
    });

    if (response.data.status !== "OK") {
        throw new Error("Location not found");
    }

    const location = response.data.results[0].geometry.location;

    return {
        latitude: location.lat,
        longitude: location.lng
    };
}

module.exports = {
    getCoordinates
};