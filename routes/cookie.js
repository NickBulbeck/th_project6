const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser()); 


router.get('/*',(req,res,next) => {
  if (req.cookies.set) {
      next();
  } else {
      res.render('clickwall');
  }
})


module.exports = router;