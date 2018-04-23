const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const uuid = require('uuid/4');
const port = process.env.PORT || 3000;

const server = express();

server.disable('x-powered-by');

if (process.env.NODE_ENV !== 'test') server.use(morgan('dev'));
server.use(bodyParser.json());

const snackRoutes = require('./src/routes/snacks');
server.use('/snacks', snackRoutes);

server.use((err, req, res, next) => {
    const status = err.status;
    res.status(status).json({ error: err});
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = server;