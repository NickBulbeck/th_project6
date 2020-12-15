const express = require('express');
const router = express.Router();

const content = require('../data/content.json').content;

router.get('/',(req,res) => {
    const message = "About route is working so far";
    const HTML = `<h2 style="font-family: sans-serif; font-weight:350">${message}</h2>`;
    res.send(HTML);
})
router.get('/aboutError',(req,res) => {
    const err = new Error("Something went wrong in the aboutError thing");
    err.status = 500;
    throw(err);
} )

module.exports = router;