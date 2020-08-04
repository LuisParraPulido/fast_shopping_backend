const express = require('express');
const Controller = require('../controllers/orders');

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


function addOrder(req, res) {
  const order = req.body
  Controller.addOrders(order)
    .then((id) => {
      res.status(200).send(id)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}


router.get('/orders', list);
router.post('/orders', addOrder);

module.exports = router;