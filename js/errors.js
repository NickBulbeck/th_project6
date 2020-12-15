const express = require('express');
const app = express();

app.use((req,res,next) => {
    const url = req.url;
    const baseURL = req.baseUrl;
    const originalURL = req.originalUrl;
    const host = req.hostname;
    const wotevah = req.protocol;
    console.log(wotevah);
    console.log(`url: ${url}`);
    console.log(`baseURL: ${baseURL}`);
    console.log(`originalURL: ${originalURL}`);
    console.log(`host: ${host}`);
    const message = `We tried calling ${url}, but there was nobody in.`;
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