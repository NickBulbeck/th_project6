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
    return locals;
}

module.exports.createLocals = createLocals;