
/* 
    I en -data.js-fil
*/

const countryArray = [{}, {}, {}];

export const getAllCountries = () => {
    //kode
}
export const getCountryById = (id) => {
    //kode
}
export const getCountryByRegion = (region) => {
    //kode
}
export default getAllCountries;

/*
    I en komponent som importerer CountryList.js
*/
import { getAllCountries, getCountryRegion } from './country-data.js';
/*
    I en komponent som importerer CountryForm.js
*/
import getAllCountries from './country-data.js';