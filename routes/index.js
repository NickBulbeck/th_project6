const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const createLocals = require('../js/createLocals.js').createLocals;
const projects = require('../data/data.json').projects;

// router.use(bodyParser.urlencoded({extended:false})); 
router.use(cookieParser()); 


router.get('/index',(req,res) => {
    res.redirect('/');
})
router.get('/home',(req,res) => {
    res.redirect('/');
})
// TRY THIS
router.post('/',(req,res) => {
    res.cookie('set',true);
    console.log("In the post '/' method: ", res.cookie);
    const locals = createLocals('index');
    locals.projects = projects;
    res.render('index',locals);
})
router.post('/da',(req,res) => {
    const setDontPanic = require('../js/cookies').setDontPanic;
    res.cookie('set',true);
    res.cookie('da',true); // Not sure I need this!
    console.log("In the post '/da' method: ", res.cookie);
    const locals = createLocals('index');
    locals.projects = projects;
    setDontPanic();
    res.render('index',locals)
})
// END TRY
router.get('/',(req,res) => {
    const locals = createLocals('index');
    locals.projects = projects;
    res.render('index',locals);
})


module.exports = router;