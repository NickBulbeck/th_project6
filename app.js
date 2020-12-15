const express = require('express');
const app = express();

// Data:
const projectData = require('./data/data.json').projects;

// Routes:
const indexRoutes = require('./routes/index.js');
const aboutRoutes = require('./routes/about.js');
const projectsRoutes = require('./routes/projects.js');

app.use(indexRoutes);
// app.get('/',(req,res) => {
//     const message = "Root route is working so far";
//     const HTML = `<h2 style="font-family: sans-serif; font-weight:350">${message}</h2>`;
//     res.send(HTML);
// })

app.use('/about',aboutRoutes);
// app.get('/about',(req,res) => {
//     const message = "About route is working so far";
//     const HTML = `<h2 style="font-family: sans-serif; font-weight:350">${message}</h2>`;
//     res.send(HTML);
// })

app.use('/projects',projectsRoutes);
// app.get('/projects/:id',(req,res) => {
//     const message = `Project ${req.params.id} route is working so far`;
//     const HTML = `<h2 style="font-family: sans-serif; font-weight:350">${message}</h2>`;
//     res.send(HTML);
// })

// aaaaand... GO!

app.listen(3000,() => {
    console.log("The app is running on port 3000");
});