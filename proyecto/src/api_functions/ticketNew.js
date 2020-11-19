import ConfigApi from '../config/config';
async function ticketNew(raffle_id, client_id, user_id) {
  const url = ConfigApi.url + 'ticket/';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raffle_id: raffle_id,
        client_id: client_id,
        user_id: user_id,
      }),
    });
    const dataJson = await response.json();
    if (dataJson.status == 'successfull') {
      console.log(' cool' + dataJson);
      return dataJson.message;
    } else {
      return dataJson.message;
    }
  } catch (error) {
    console.log(' Error message' + error);
    return error + 'Sin acceso al servidor, contacte al administrador';
  }
}

export {ticketNew};
