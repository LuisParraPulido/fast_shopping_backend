const express = require('express');
const Controller = require('../controllers/users');

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


function addUsers(req, res) {
  const user = req.body
  Controller.addUsers(user)
    .then((item) => {
      res.status(200).send(item)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}

function getUser(req, res) {
  const email = req.params
  Controller.getUser(email)
    .then((item) => {
      res.status(200).send(item)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}


router.get('/users', list);
router.get('/users/:email', getUser);
router.post('/users', addUsers);

module.exports = router;