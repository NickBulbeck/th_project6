const express = require('express');
const router = express.Router();

const aboutContent = require('../data/content.json').content.about;
const layout = require('../data/content.json').content.layout;

router.get('/',(req,res) => {
    aboutContent.docTitle = aboutContent.title;
    aboutContent.layout = layout;
    res.render('about',aboutContent);
})

module.exports = router;