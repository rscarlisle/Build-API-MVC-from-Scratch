const model = require('../models/snacks');

getAll = (req, res, next) => {
    // console.log(req.query)
    const limit = req.query.limit;
    // console.log('limit: ', limit)
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

  update = (req, res, next) => {
    const id = req.params.id
    const updatedSnack = model.update(id, req.body)
  
    if (updatedSnack.errors) {
      return next({
        status: 400,
        errors: updatedSnack.errors
      })
    }
    res.status(200).json({ snack: updatedSnack })
  }

  deleteSnack = (req, res, next) => {
    const id = req.params.id
    const result = model.deleteSnack(id)
  
    if (result.error) {
      return next({
        status: 404,
        message: `Could not find snack of id ${id}`,
        error: result.error
      })
    }
    res.status(204).json()
  }

module.exports = { 
    getAll,
    getById,
    create,
    update,
    deleteSnack
}