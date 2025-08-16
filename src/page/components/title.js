
// Markdown
const mdToSpan = require("../../markdown.js");
const { all } = require("../generic.js");

// Create the component
function create(component) {
    return `<h1 class="component-title"${all(component)}>${mdToSpan(component.text)}</h1>`;
}

module.exports = create;