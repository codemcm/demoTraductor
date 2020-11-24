import ConfigApi from '../config/config';
const axios = require('axios');
async function getPalabraNombre(name) {
  return await axios({
    method: 'GET',
    url: ConfigApi.url + 'palabra/'+name,
    responseType: 'text',
  }).then(function(response) {
    return response;
  });
}

export {getPalabraNombre};
