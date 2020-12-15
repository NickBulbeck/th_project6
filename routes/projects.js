const express = require('express');
const router = express.Router();

router.get('/:id',(req,res) => {
    const message = `Project ${req.params.id} route is working so far`;
    const HTML = `<h2 style="font-family: sans-serif; font-weight:350">${message}</h2>`;
    res.send(HTML);
})

module.exports = router;