/**************************************************************
inputs: none
does:   updates the content.layout.dontPanic flag in 
        ./data/content.json (initially set to false) to true.
        Called via the /da route when the user clicks the
        Douglas Adams button in the cookie wall.
outputs: none
***************************************************************/
const layoutData = require('../data/content.json').content.layout;

const setDontPanic = () => {
  layoutData.dontPanic = true;
}

const unsetDontPanic = () => {
  layoutData.dontPanic = false;
}


exports.setDontPanic = setDontPanic;
exports.unsetDontPanic = unsetDontPanic;