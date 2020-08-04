const { nanoid } = require('nanoid');
const store = require('../store/mysql');

const TABLE = 'products';

function Controller() {
  async function list() {
    const products = await store.list(TABLE);
    return products
  }

  async function addProducts(body) {
    if(
      !body.image ||
      !body.name ||
      !body.price ||
      !body.category ||
      !body.description
    ) {
      throw new Error('Invalid data');
    }

    const product = {
      id: nanoid(),
      name: body.name,
      image: body.image,
      price: body.price,
      category: body.category,
      description: body.description,
      date: new Date(),
    }

    const addProduct = await store.insert(TABLE, product)
    return addProduct
  }


  return {
    list,
    addProducts,
  }
}


module.exports = Controller(store);