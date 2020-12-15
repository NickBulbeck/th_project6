const express = require('express');
const app = express();

//
app.set('view engine','pug');
app.use('/static',express.static('public'));

// Routes:
const indexRoutes = require('./routes/index.js');
const aboutRoutes = require('./routes/about.js');
const projectsRoutes = require('./routes/projects.js');

app.use(indexRoutes);
app.use('/about',aboutRoutes);
app.use('/projects',projectsRoutes);

// Errors...
const errorHandler = require('./js/errors.js');

app.use(errorHandler);
// ToDo: work out why this doesn't work when used in errorHandler, but does work here 
//  (when the 404 error works identically in either file).
app.use((err,req,res,next) => {
    if (!err.status) {
        err.status = 500;
    }
    res.status(err.status);
    res.send(`<p style="font-family: sans-serif">${err.status}: ${err.message}</p>`);
})

// aaaaand... GO!

app.listen(3000,() => {
    console.log("The app is running on port 3000");
});