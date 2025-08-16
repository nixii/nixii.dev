
// Markdown
const mdToSpan = require("../../markdown.js");
const { all } = require("../generic.js");

// Create the component
function create(component) {
    return `<h2 class="component-name"${all(component)}>${mdToSpan(component.text)}</h2>`;
}

module.exports = create;