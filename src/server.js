const express = require('express')
require('express-async-errors');

module.exports = function createServer({port,dealsGateway}){
  const app = express()

  app.get('/', async (req, res) => {
    const response = await dealsGateway.getDeals();
    const deals = response.data;
    console.debug({deals});
    const renderedDeals = deals.map( (deal)=>{
      return `${deal.description}: (${deal.promoCode})\n`;
    });
    res.send('Welcome to the faux store!\n\n'+renderedDeals);
  });

  app.listen(port, () => {
    console.log(`storefront listening on port ${port}`)
  });
}
