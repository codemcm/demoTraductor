import ConfigApi from '../config/config';
const axios = require('axios');
async function anilamesListar() {
  return await axios({
    method: 'GET',
    url: ConfigApi.url + 'palabras/',
    responseType: 'text',
  }).then(function(response) {
    return response;
  });
}

export {anilamesListar};
