const BASE_URL = "https://restcountries.com/";
const createUrl = (path) => new URL(path, BASE_URL);

const getAllCountries = createUrl("/v3.1/all");
const getbyRegion = (regionName) => createUrl(`/v3.1/region/${regionName}`)
const getbyName = (countriesName) => createUrl(`/v3.1/name/${countriesName}`)


export default {
    BASE_URL,
    getAllCountries,
    getbyRegion,
    getbyName
};
