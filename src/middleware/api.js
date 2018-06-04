
const axios = require('axios');

const instanceAxios = axios.create({
  timeout: 2000,
});


const API_ROOT = 'https://restcountries.eu/rest/v2/capital';

/**
 * @param fetchApi get from server *
 */

const fetchApi = async (endpoint = '') => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  const result = await instanceAxios.get(fullUrl).catch((error) => {
    if (error.response) {
      return { status: error.response.status };
    }
    return { status: 500 };
  });
  return result;
};


export { fetchApi };

