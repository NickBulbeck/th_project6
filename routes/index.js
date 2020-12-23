const express = require('express');
const router = express.Router();

const createLocals = require('../js/createLocals.js').createLocals;
const projects = require('../data/data.json').projects;


router.get('/index',(req,res) => {
    res.redirect('/');
})
router.get('/home',(req,res) => {
    res.redirect('/');
})

router.get('/',(req,res) => {
    const locals = createLocals('index');
    locals.projects = projects;
    res.render('index',locals);
})


module.exports = router;