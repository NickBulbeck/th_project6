const express = require('express');
const router = express.Router();

const createLocals = require('../js/createLocals.js').createLocals;

router.get('/',(req,res) => {
    const locals = createLocals('about')
    res.render('about',locals);
})

// artificial route designed to test the error-handling code in app.js
router.get('/error',(req,res,next) => {
    const err = require('../js/createError.js').createError(500);
    next(err);
})

module.exports = router;