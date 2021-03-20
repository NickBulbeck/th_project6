/**************************************************************
    Contains the middleware that sets up the "not found" page.
    Ideally it would also contain the code that sets up the
    general error page too, but for some reason this didn't
    work. So I had to keep that code in app.js.
    
    ToDo: Identify the above reason and make it work. Obviously.
***************************************************************/

const express = require('express');
const app = express();

const createLocals = require('./createLocals').createLocals;

app.use((req,res,next) => {
    let locals = createLocals('error');
    const url = `${req.get('host')}${req.url}`;
    locals.url = url;
    const notFound = require('./createError.js').create404();
    console.log("Message... ", notFound.message);
    locals.error = notFound;
    res.render('page-not-found',locals);
})


module.exports = app;