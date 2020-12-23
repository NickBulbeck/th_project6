const express = require('express');
const router = express.Router();

const createLocals = require('../js/createLocals.js').createLocals;

router.get('/',(req,res) => {
    const locals = createLocals('about')
    console.log(locals);
    res.render('about',locals);
})

module.exports = router;