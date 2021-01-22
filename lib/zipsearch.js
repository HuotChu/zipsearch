import data from './2019_US_data.js';
import calcDistance from './haversine.js';

/**
 * find the closest location to the input
 * @param  {number} lat -  latitude value
 * @param  {number} lon - longitude value
 * @return {string} zip - postal code
 */
function findZip (lat, lon) {
    let minDistance = Infinity;
    let city = {
        zip: 'Not Found.'
    };

    data.forEach( location => {
        const distance = calcDistance({ lat, lon }, location);
        if (distance < minDistance) {
            city = location;
            minDistance = distance;
        }
    } );

    city.distance = minDistance;

    return city;
}

module.exports.findZip = findZip;
