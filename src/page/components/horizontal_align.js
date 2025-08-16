
// Imports
const { existsSync } = require("fs");
const { join } = require("path");
const { all } = require("../generic.js");

// The template
const template = "<div class=\"component-horizontal-align\"{{style}}>{{content}}</div>";

// Create a container
function create(component) {
    let body = '';
    
    for (const c of component.components) {
        const componentPath = join(__dirname, `${c.type}.js`);
        if (existsSync(componentPath)) {
            const renderComponent = require(componentPath);
            let t = renderComponent(c);
            body += t;
        }
    }

    return template
        .replace("{{content}}", body)
        .replace("{{style}}", all(component));
}

module.exports = create;