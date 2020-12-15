const express = require('express');
const router = express.Router();

const projectData = require('../data/data.json').projects;


router.get('/:id',(req,res) => {
    const message = `Project ${req.params.id} route is working so far`;
    const description = projectData[req.params.id -1].description;
    const HTML = `<h2 style="font-family: sans-serif; font-weight:350">${message}</h2>
                  <p>${description}</p>`;
    res.send(HTML);
})

module.exports = router;