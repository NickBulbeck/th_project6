const express = require('express');
const router = express.Router();

const projectData = require('../data/data.json').projects;
const createLocals = require('../js/createLocals.js').createLocals;

router.get('/:id',(req,res,next) => {
    const project = projectData[req.params.id -1];
    if (project) {
        let locals = createLocals('projects');
        locals = {
            ...locals,
            ...project
        }
        console.log(locals);
        res.render('projects',locals);
    } else {
        const url = `${req.get('host')}/projects${req.url}`;
        const message = `It seems you tried to find <span class="url">${url}</span>. Sadly, there is no Project "<span class="url">${req.url}</span>".`;
        const err = new Error(message);
        err.status = 404;
        err.url = url;
        next(err);
    }

})

module.exports = router;