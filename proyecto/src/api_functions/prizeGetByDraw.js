import ConfigApi from '../config/config';
const axios = require('axios');
function prizeGetByDraw(drawId) {
  return axios({
    method: 'GET',
    url: ConfigApi.url + 'prize/' + drawId,
    responseType: 'text',
  }).then(function(response) {
    console.log(response.data);
    return response.data;
  });
}

export {prizeGetByDraw};
