const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
//
app.set('view engine','pug');
app.use('/static',express.static('public'));
app.use(cookieParser()); 

// Routes:
const indexRoutes = require('./routes/index.js');
const aboutRoutes = require('./routes/about.js');
const projectRoutes = require('./routes/project.js');
const cookieRoutes = require('./routes/cookie.js');



app.use(cookieRoutes);


app.use(indexRoutes);
app.use('/about',aboutRoutes);
app.use('/project',projectRoutes);

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
    console.log("Message... ", err.message);
    res.status(err.status);
    let locals = require('./js/createLocals.js').createLocals('error');
    locals.error = err;
    res.render('error',locals);
})

// aaaaand... GO!

app.listen(port,() => {
    console.log(`The app is running on port ${port}`);
});