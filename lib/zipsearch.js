import data from './2019_US_data.js';
import calcDistance from './haversine.js';

/**
 * find the closest location to the input
 * @param  {number} lat -  latitude value
 * @param  {number} lon - longitude value
 * @return {object} area - closest location to the input (zip, lat, lon, distance)
 */
function findZip (lat, lon) {
    let minDistance = Infinity;
    let area = {
        zip: 'Not Found.'
    };

    data.forEach( location => {
        const distance = calcDistance({ lat, lon }, location);
        if (distance < minDistance) {
            area = location;
            minDistance = distance;
        }
    } );

    area.distance = minDistance;

    return area;
}

module.exports.findZip = findZip;
