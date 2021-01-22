/**
 * converts a number to radian value
 * @param {number} num - a number
 */
function toRadian (num) {
    return (num * Math.PI) / 180;
}
  
/**
 * find the distance between two lat-lon pairs
 * @param {object} start - starting lat-lon
 * @param {object} end - ending lat-lon
 */
function distance (start, end) {
    const dLat = toRadian(end.lat - start.lat);
    const dLon = toRadian(end.lon - start.lon);
    const lat1 = toRadian(start.lat);
    const lat2 = toRadian(end.lat);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return 3960 * c;
}

export default distance;
