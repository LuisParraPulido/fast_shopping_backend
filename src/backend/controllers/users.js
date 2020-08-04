const { nanoid } = require('nanoid');
const store = require('../store/mysql');

const TABLE = 'users';

function controller() {
  async function list() {
    const users = await store.list(TABLE);
    return users
  }

  async function addUsers(body) {
    if(
      !body.name ||
      !body.document ||
      !body.address ||
      !body.phone ||
      !body.email
    ) {
      throw new Error('Invalid data');
    }

    const user = {
      id: nanoid(),
      name: body.name,
      address: body.address,
      phone_number: body.phone,
      email: body.email,
      document: body.document,
    }

    const adduser = await store.insert(TABLE, user)
    return adduser
  }

  async function getUser(body) {
    if(!body.email) {
      throw new Error('Invalid data');
    }

    const user = await store.get(TABLE, body.email);
    return user
  }


  return {
    list,
    addUsers,
    getUser,
  }
}


module.exports = controller(store);