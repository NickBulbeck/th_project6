const express = require('express');
const app = express();

app.use((req,res,next) => {
    const url = `${req.get('host')}${req.url}`;
    // the span needs a class of 'url' when I do this properly
    const message = `We tried calling <span style="font-family:monospace">${url}</span>, but there was nobody in.`;
    const notFound = new Error(message);
    notFound.status = 404;
    next(notFound);
})
// app.use((err,req,res,next) => {
//     if (!err.status) {
//         err.status = 500;
//     }
//     res.status(err.status);
//     res.send(`<p style="font-family: sans-serif">${err.status}: ${err.message}</p>`);
// })

module.exports = app;