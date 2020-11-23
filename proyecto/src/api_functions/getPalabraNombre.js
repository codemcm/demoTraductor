import ConfigApi from '../config/config';
const axios = require('axios');
async function getPalabraNombre(name) {
  return await axios({
    method: 'GET',
    url: ConfigApi.url + 'palabras/'+name,
    responseType: 'text',
  }).then(function(response) {
    return response;
  });
}

export {getPalabraNombre};
