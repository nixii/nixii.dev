
// Markdown
const mdToSpan = require("../../markdown.js");
const { all } = require("../generic.js");

// Create the component
function create(component) {
    return `<p class="component-paragraph"${all(component)}>${mdToSpan(component.text)}</p>`;
}

module.exports = create