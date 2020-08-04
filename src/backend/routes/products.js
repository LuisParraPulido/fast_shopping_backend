const express = require('express');
const Controller = require('../controllers/products');

const router = express.Router();

function list(req, res) {
  Controller.list()
    .then((list) => {
      res.status(200).send(list)
    })
    .catch((error) => {
      res.status(500).send(error)
    })

}


function addProduct(req, res) {
  const product = req.body
  Controller.addProducts(product)
    .then((item) => {
      res.status(200).send(item)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}


router.get('/products', list);
router.post('/products', addProduct);

module.exports = router;