const express = require('express');
const router = express.Router();

const projectData = require('../data/data.json').projects;
const layout = require('../data/content.json').content.layout;

router.get('/:id',(req,res,next) => {
    const project = projectData[req.params.id -1];
    if (project) {
        project.docTitle = project.project_name;
        project.layout = layout;
        res.render('projects',project);
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