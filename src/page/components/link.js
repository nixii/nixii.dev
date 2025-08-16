
// Markdown
const mdToSpan = require("../generic.js");
const { all } = require("../generic.js");

// Create the component
function create(component) {
    return `<a class="component-link" href="${component.src}"${component.newPage ? 'target="_blank"' : ''}${all(component)}>${mdToSpan(component.text)}</a>`;
}

module.exports = create;