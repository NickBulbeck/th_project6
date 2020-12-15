const express = require('express');
const router = express.Router();

const content = require('../data/content.json').content;


router.get('/index',(req,res) => {
    res.redirect('/');
})
router.get('/home',(req,res) => {
    res.redirect('/');
})

router.get('/',(req,res) => {
    const message = "Root route is working so far";
    const HTML = `<h2 style="font-family: sans-serif; font-weight:350">${message}</h2>`;
    res.send(HTML);
})


module.exports = router;