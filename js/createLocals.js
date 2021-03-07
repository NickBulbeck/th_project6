/**************************************************************
inputs: page (string)
does:   reads ./data/content.json for text content specific to 
        the page specified in the 'page' variable. In a more
        advanced version of the app, it would retrieve this
        information from a database (much as WordPress does).
outputs: a custom object that can be sent directly to a pug
         template.
***************************************************************/

const createLocals = (page) => {
    const content = require('../data/content.json').content;
    const layout = content.layout;
    let locals = {};
    for (property in layout) {
        locals[property] = layout[property];
    }
    if (content[page]) {
        const pageValues = content[page];
        for (property in pageValues) {
            locals[property] = pageValues[property];
        }
    }
    console.log(locals);
    return locals;
}

module.exports.createLocals = createLocals;