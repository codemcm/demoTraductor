import ConfigApi from '../config/config';
const axios = require('axios');
function ticketGetByDraw(drawId) {
  return axios({
    method: 'GET',
    url: ConfigApi.url + 'ticket/' + drawId,
    responseType: 'text',
  }).then(function(response) {
    console.log(response.data);
    return response.data;
  });
}

export {ticketGetByDraw};
