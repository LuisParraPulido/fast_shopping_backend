const { nanoid } = require('nanoid');
const store = require('../store/mysql');

const TABLE = 'orders';

function controller() {
  async function list() {
    const orders = await store.list(TABLE);
    return orders
  }

  async function addOrders(body) {
    if(
      !body.email ||
      !body.cart
    ) {
      throw new Error('Invalid data');
    }

    const order = {
      id: nanoid(),
      email: body.email,
      cart: JSON.stringify(body.cart),
    }

    const addOrder = await store.insert(TABLE, order)
    return addOrder
  }


  return {
    list,
    addOrders,
  }
}


module.exports = controller(store);