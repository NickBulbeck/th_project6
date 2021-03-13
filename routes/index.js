const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const createLocals = require('../js/createLocals.js').createLocals;
const projects = require('../data/data.json').projects;

router.use(cookieParser()); 


router.get('/index',(req,res) => {
    res.redirect('/');
})
router.get('/home',(req,res) => {
    res.redirect('/');
})

router.post('/',(req,res) => {
    res.cookie('set',true);
    const locals = createLocals('index');
    locals.projects = projects;
    res.render('index',locals);
})
router.post('/da',(req,res) => {
    const setDontPanic = require('../js/cookies').setDontPanic;
    res.cookie('set',true);
    res.cookie('da',true);
    setDontPanic();
    const locals = createLocals('index');
    locals.projects = projects;
    res.render('index',locals)
})

router.get('/',(req,res) => {
    const locals = createLocals('index');
    locals.projects = projects;
    res.render('index',locals);
})


module.exports = router;