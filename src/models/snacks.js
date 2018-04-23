const uuid = require('uuid/v4');
const snacks = require('../../db/snacks');

getAll = (limit) => {
    console.log('limit: ', limit)
    const listOfSnacks = (!limit) ? snacks : (limit > snacks.length) ? false : snacks.slice(0, limit);
    return listOfSnacks;
}

getById = (id) => {
    const snack = snacks.find(snack => { return snack.id === id })
    return snack
  }

module.exports = { 
    getAll, 
    getById
}
// create, update, deleteSnack }
