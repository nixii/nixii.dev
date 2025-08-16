
// Markdown
const { all } = require("../generic.js");

// Create the component
function create(component) {
    return `<img class="component-image" src="${component.src}" alt="${component.alt}"${all(component)}>`;
}

module.exports = create;