const express = require('express');
const app = express();

const createLocals = require('./createLocals').createLocals;

app.use((req,res,next) => {
    let locals = createLocals('errors');
    const url = `${req.get('host')}${req.url}`;
    locals.url = url;
    // the span needs a class of 'url' when I do this properly
    // const message = `We tried calling <span class="url">${url}</span>, but there was nobody in.`;
    const notFound = require('./createError.js').create404();
    locals.error = notFound;
    console.log(locals);
    res.render('page-not-found',locals);
})
// app.use((err,req,res,next) => {
//     if (!err.status) {
//         err.status = 500;
//     }
//     res.status(err.status);
//     res.send(`<p style="font-family: sans-serif">${err.status}: ${err.message}</p>`);
// })

module.exports = app;