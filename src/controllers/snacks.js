const model = require('../model/snacks');

getAll = (req, res, next) => {
    const limit = req.query.limit;
    const data = model.getAll(limit);

    if (!data) {
        return next({
            status: 404,
            message: `Could not list snacks of limit ${limit}`
        })
    }

    res.status(200).json({ data });
}