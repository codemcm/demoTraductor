import ConfigApi from '../config/config';
const axios = require('axios');
function lotListAll(nombre) {
  return axios({
    method: 'GET',
    url: ConfigApi.url + 'palabras/:'+ nombre,
    responseType: 'text',
  }).then(function(response) {
    //console.log(response.data);
    return response.data;
  });
}

export {lotListAll};
