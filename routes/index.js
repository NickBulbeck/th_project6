const express = require('express');
const router = express.Router();

const indexContent = require('../data/content.json').content.index;
const layout = require('../data/content.json').content.layout;


router.get('/index',(req,res) => {
    res.redirect('/');
})
router.get('/home',(req,res) => {
    res.redirect('/');
})

router.get('/',(req,res) => {
    indexContent.docTitle = indexContent.title;
    indexContent.layout = layout;
    res.render('index',indexContent);
})


module.exports = router;