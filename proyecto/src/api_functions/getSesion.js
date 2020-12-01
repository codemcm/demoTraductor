import ConfigApi from '../config/config';
const axios = require('axios');
async function getSesion(name, age) {
  return await axios({
    method: 'GET',
    url: ConfigApi.url + 'usuario/'+name + '/'+age,
    responseType: 'text',
  }).then(function(response) {
    return response;
  });
}

export {getSesion};
