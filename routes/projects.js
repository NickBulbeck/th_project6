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
        let error = create404();
        console.log(error);
        locals.error = error;
        res.render('page-not-found',locals);
    }

})

module.exports = router;