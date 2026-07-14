const geoTz = require("geo-tz");

function getTimezone(latitude, longitude) {
    const timezone = geoTz.find(
        latitude,
        longitude
    );

    return timezone[0];
}

module.exports = {
    getTimezone
};