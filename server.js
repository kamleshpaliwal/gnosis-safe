const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const redisService = require('./app/services/redis_service');
dotenv.config();
redisService.connectRedis()


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/transaction_routes')(app);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to application.' });
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}.`);
});
