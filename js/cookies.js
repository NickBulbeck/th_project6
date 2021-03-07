/**************************************************************
inputs: none
does:   updates the content.layout.dontPanic flag in 
        ./data/content.json (initially set to false) to true.
        Called via the /da route when the user clicks the
        Douglas Adams button in the cookie wall.
outputs: none
***************************************************************/

const setDontPanic = () => {
    const layoutData = require('../data/content.json').content.layout;
    layoutData.dontPanic = true;
    console.log(layoutData);
}

module.exports.setDontPanic = setDontPanic;