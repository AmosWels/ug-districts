const districts = require('./data.json');
const all_districts = districts.data;

/** @function
 * @name getDistrict
 *
 * @param {string} district
 *
 * */
getDistrict = (district) => {
    if(typeof(district)=='undefined' | typeof(district)!='string' ){
        return `Invalid district value`
    }
    const matchDistrict = all_districts.some( value => value.asciiname.toLowerCase() === district.toLowerCase());
    if (!matchDistrict){
        return `No district with name ${district} found in Uganda`
    }
    for (var i=0; i < all_districts.length; i++) {
        if (all_districts[i].asciiname.toLowerCase() === district.toLowerCase()) {
                return all_districts[i];
        } 
    }
}

/** @function
 * @name getDistricts
 *
 * */
getDistricts =()=>{
    if (all_districts && all_districts.length>0){
        return all_districts
    }
}
console.log(getDistrict('Mbale'))
module.exports = {
    getDistrict,
    getDistricts
}
