const express = require('express');
const router = express.Router();

const projectData = require('../data/data.json').projects;
const createLocals = require('../js/createLocals.js').createLocals;
const create404 = require('../js/createError.js').create404;

router.get('/:id',(req,res,next) => {
    const project = projectData[req.params.id -1];
    if (project) {
        let locals = createLocals('projects');
        locals = {
            ...locals,
            ...project
        };
        res.render('projects',locals);
    } else {
        let locals = createLocals('error');
        const url = `${req.get('host')}/projects${req.url}`;
        // const message = `It seems you tried to find <span class="url">${url}</span>. Sadly, there is no Project "<span class="url">${req.url}</span>".`;
        let err = create404('project');
        err.url = url;
        err = {
            ...err,
            ...locals
        };
        console.log(err);
        next(err);
        // app.render('page-not-found',err);
    }

})

module.exports = router;