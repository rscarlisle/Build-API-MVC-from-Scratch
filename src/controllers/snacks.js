const model = require('../models/snacks');

getAll = (req, res, next) => {
    console.log(req.query)
    const limit = req.query.limit;
    console.log('limit: ', limit)
    const data = model.getAll(limit);

    if (!data) {
        return next({
            status: 404,
            message: `Could not list snacks of limit ${limit}`
        })
    }
    res.status(200).json({ data });
}

getById = (req, res, next) => {
    const id = req.params.id
    const snack = model.getById(id)
  
    if (!snack) {
      return next({
        status: 404,
        message: `Could not find snack with id of ${id}`
      })
    }
    res.status(200).json({ snack })
  }

  create = (req, res, next) => {
    console.log("REQ BODY", req.body)
    const snack = model.create(req.body)
  
    if (snack.errors) {
      return next({
        status: 400,
        message: `The 'name' or 'id' field is missing`,
        errors: snack.errors
      })
    }
  
    res.status(201).json({ snack })
  }

module.exports = { 
    getAll,
    getById,
    create
}
// update, deleteSnack }
