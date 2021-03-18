const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser()); 

const setDontPanic = require('../js/cookies').setDontPanic;
const unsetDontPanic = require('../js/cookies').unsetDontPanic;
const createLocals = require('../js/createLocals.js').createLocals;
const projects = require('../data/data.json').projects;

// The idea is that this code is called for ALL routes the user might try. That way,
// they can't bypass the cookie-wall by using an unusual route.
// '/*' seemed worth a try here, and I'm still surprised at how well it seems to work!
// The Douglas Adams flag, stored in data/content.json, is set explicitly every time here.
// So - why bother? Well, it addresses an edge case - if the user picks the Douglas Adams button, but
// then deletes the cookies in the browser, then chooses the OTHER button. The flag would still be
// set unless they re-started the server.
router.get('/*',(req,res,next) => {
  if (req.cookies.set) {
    const dontPanic = req.cookies.da;
    dontPanic ? setDontPanic() : unsetDontPanic(); // Finally used a ternary operator! Yay me.
    next();
  } else {
    // get the 'about' stuff, and copy/paste in the about.pug stuff into clickwall.
    // 
    const locals = createLocals('about');
    res.render('clickwall',locals);
  }
})

router.post('/',(req,res) => {
  res.cookie('set',true);
  const locals = createLocals('index');
  locals.projects = projects;
  res.render('index',locals);
  const unsetDontPanic = require('../js/cookies').unsetDontPanic;
  unsetDontPanic();
})

router.post('/da',(req,res) => {
  const setDontPanic = require('../js/cookies').setDontPanic;
  res.cookie('set',true);
  res.cookie('da',true);
  setDontPanic();
  const locals = createLocals('index');
  locals.projects = projects;
  res.render('index',locals)
})


module.exports = router;