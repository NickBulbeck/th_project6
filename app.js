const express = require('express');
const app = express();

//
app.set('view engine','pug');
app.use('/static',express.static('public'));

// Routes:
const indexRoutes = require('./routes/index.js');
const aboutRoutes = require('./routes/about.js');
const projectsRoutes = require('./routes/projects.js');

// Try this ....................................
app.get('/*',(req,res,next) => {
    if (false) {
        res.send('<h1>Hello, cookieworld!</h1>');
    }
    next();
})
// .............................................
app.use(indexRoutes);
app.use('/about',aboutRoutes);
app.use('/projects',projectsRoutes);

// Errors...
const errorHandler = require('./js/handleErrors.js');

app.use(errorHandler);
// ToDo: work out why this doesn't work when used in errorHandler, but does work here 
//  (when the 404 error works identically in either file).
app.use((err,req,res,next) => {
    if (!err.status) {
        err.status = 500;
    }
    console.log(err.stack);
    res.status(err.status);
    let locals = require('./js/createLocals.js').createLocals('error');
    locals.error = err;
    res.render('error',locals);
})

// aaaaand... GO!

app.listen(3000,() => {
    console.log("The app is running on port 3000");
});