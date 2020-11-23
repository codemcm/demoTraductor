import ConfigApi from '../config/config';
const axios = require('axios');
async function animal_byid(nombre) {
  return await axios({
    method: 'GET',
    url: ConfigApi.url + 'palabras/:'+nombre,
    responseType: 'text',
  }).then(function(response) {
    return response;
  });
}

export {animal_byid};
