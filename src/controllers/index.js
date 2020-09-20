const express = require('express');
const router = express.Router();

const contextSourcesController = require('./contextSourcesController')

router.use('/context-sources', contextSourcesController);

module.exports = app => app.use('/v1', router);
