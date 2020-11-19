import ConfigApi from '../config/config';
const axios = require('axios');
async function clientListAll() {
  return await axios({
    method: 'GET',
    url: ConfigApi.url + 'client/all/',
    responseType: 'text',
  }).then(function(response) {
    return response.data;
  });
}

export {clientListAll};
