const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const config = require('../../config');

const users = require('./routes/users');
const products = require('./routes/products');
const orders = require('./routes/orders');

app.use(cors());
app.use(bodyParser.json());

app.use(users);
app.use(products);
app.use(orders);




app.listen(config.api.port, function() {
    console.log(`listening http://localhost:${config.api.port}`);
})