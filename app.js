const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//
app.set('view engine','pug');
app.use('/static',express.static('public'));
// app.use(bodyParser.urlencoded({extended:false})); 
app.use(cookieParser()); 

// Routes:
const indexRoutes = require('./routes/index.js');
const aboutRoutes = require('./routes/about.js');
const projectsRoutes = require('./routes/projects.js');

// Try this ....................................
app.get('/*',(req,res,next) => {
    console.log(req.cookies);
    if (req.cookies.set) {
        const now = new Date();
        console.log(now);
        next();
    } else {
        console.log("In the app.get * method: ", req.cookies.set);
        res.render('clickwall');
    }
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
// Try this
app.post('/',(req,res,next) => {
    const locals = createLocals('index');
    locals.projects = projects;
    res.redirect('/index',locals);
})
app.post('/da',(req,res,next) => {
    // do something to set cookies
    const locals = createLocals('index');
    locals.projects = projects;
    res.redirect('/index',locals);
})




// aaaaand... GO!

app.listen(3000,() => {
    console.log("The app is running on port 3000");
});