const axios = require('axios');

module.exports = function createDealsGateway({baseUrl}){
  const client = axios.create({
    baseURL:baseUrl
  });

  async function getDeals(){
    return client.get('deals');
  }

  return {getDeals};
}
