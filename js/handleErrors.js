const express = require('express');
const app = express();

const createLocals = require('./createLocals').createLocals;

app.use((req,res,next) => {
    let locals = createLocals('error');
    const url = `${req.get('host')}${req.url}`;
    locals.url = url;
    const notFound = require('./createError.js').create404();
    locals.error = notFound;
    res.render('page-not-found',locals);
})


module.exports = app;