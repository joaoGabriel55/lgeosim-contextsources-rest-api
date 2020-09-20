const express = require('express');
const router = express.Router();

const service = require('../services/contextsources')

router.get('', async (req, res) => {
    const contextSources = service.getAllContextSources()
    return res.status(200).send(contextSources);
})

router.get('/:contextSourceName', async (req, res) => {
    const contextSourceName = req.params.contextSourceName
    console.log(contextSourceName)
    const contextSource = service.getContextSourceByName(contextSourceName)
    return res.status(200).send(contextSource);
})

module.exports = router