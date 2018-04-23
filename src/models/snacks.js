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
        response = { errors };
    }

    const snack = {
        id: uuid(),
        name: body.name
    }
    snacks.push(snack);
    response = snack;
    return response;
}  

update = (id, body) => {
    const errors = [];
    let snack = snacks.find( snack => { return snack.id === id } );
    let index = snacks.indexOf(snack);
    let response;
  
    if (!id || !body.name || !snack) {
        if (!id) errors.push(`URL parameter of id: ${id} could not be found`);
        if (!body.name) errors.push('Please fill in name field');
        if (!snack) errors.push(`Could not find snack of id: ${id}`);

        response = { errors }
    } else {
      const snack = {
          id,
          name: body.name
      }
      snacks[index] = snack;
      response = snack;
    }
    return response;
  }

  deleteSnack = (id) => {
    const index = snacks.findIndex( snack => { return snack.id === id } )
    const error = []
  
    let response
  
    if (index === -1) {
      error.push(`Snack of id: ${id} is not found`)
      response = { error }
    } else {
      response = snacks.splice(index, 1)
    }
    return response
  }

module.exports = { 
    getAll, 
    getById,
    create,
    update,
    deleteSnack
}