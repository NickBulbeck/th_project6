const express = require('express');
const app = express();

const errorContent = require('../data/content.json').content.errors;
const layout = require('../data/content.json').content.layout;
errorContent.layout = layout;

app.use((req,res,next) => {
    const url = `${req.get('host')}${req.url}`;
    errorContent.docTitle = "Not found";
    errorContent.url = url;
    // the span needs a class of 'url' when I do this properly
    const message = `We tried calling <span class="url">${url}</span>, but there was nobody in.`;
    const notFound = require('./createError.js').create404();
    errorContent.error = notFound;
    res.render('page-not-found',errorContent);
})
// app.use((err,req,res,next) => {
//     if (!err.status) {
//         err.status = 500;
//     }
//     res.status(err.status);
//     res.send(`<p style="font-family: sans-serif">${err.status}: ${err.message}</p>`);
// })

module.exports = app;