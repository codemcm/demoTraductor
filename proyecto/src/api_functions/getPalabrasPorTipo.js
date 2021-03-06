import ConfigApi from '../config/config';
const axios = require('axios');
async function getPalabrasPorTipo(id) {
  return await axios({
    method: 'GET',
    url: ConfigApi.url + 'palabrastipo/'+id,
    responseType: 'text',
  }).then(function(response) {
    return response;
  });
}

export {getPalabrasPorTipo};
