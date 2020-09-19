require('dotenv').config();

require("honeycomb-beeline")({
  writeKey: process.env.HONEYCOMB_WRITE_KEY,
  dataset: "fauxstore",
  serviceName: "storefront"
});

require('axios-debug-log');


const createServer = require('./src/server');
const createDealsGateway = require('./src/dealsGateway');

const port = process.env.PORT || 3000;

const dealsGateway = createDealsGateway({
  baseUrl: envVarOrBust('DEALS_GATEWAY_BASE_URL')
});

createServer({port,dealsGateway});


function envVarOrBust(envVarName){
  const val = process.env[envVarName];
  if(val){
    return val;
  }else{
    throw `must provide ${envVarName} env var`;
  }
}
