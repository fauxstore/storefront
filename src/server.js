const express = require('express')
require('express-async-errors');

module.exports = function createServer({port,dealsGateway}){
  const app = express()
  app.set('view engine', 'hbs');
  app.set('views', __dirname + '/views');


  app.get('/', async (req, res) => {
    const response = await dealsGateway.getDeals();
    const deals = response.data;

    res.render('home',{
      deals
    });
  });

  app.listen(port, () => {
    console.log(`storefront listening on port ${port}`)
  });
}
