const uuid = require('uuid/v4');
const snacks = require('../../db/snacks');

getAll = (limit) => {
    console.log('limit: ', limit);
    const listOfSnacks = (!limit) ? snacks : (limit > snacks.length) ? false : snacks.slice(0, limit);
    return listOfSnacks;
}

getById = (id) => {
    const snack = snacks.find(snack => { return snack.id === id });
    return snack;
  }

create = (body) => {
    // console.log("BODY IN MODEL", body)
    const errors = [];
    let response;

    if (!body.name) {
        errors.push('Please fill in name field');
        response = { errors }
    }

    const snack = {
        id: uuid(),
        name: body.name
    }
    snacks.push(snack);
    response = snack;
    return response;
}  

module.exports = { 
    getAll, 
    getById,
    create
}
// update, deleteSnack }
