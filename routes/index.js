const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    const message = "Root route is working so far";
    const HTML = `<h2 style="font-family: sans-serif; font-weight:350">${message}</h2>`;
    res.send(HTML);
})


module.exports = router;