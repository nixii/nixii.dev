
// Get needed things
const { existsSync, readFileSync } = require("fs");
const { join } = require("path");

// Load the template
const template = readFileSync(join(__dirname, '../../pages/base.html'), 'utf-8');

// Create a page
function createPage(conf) {
    let body = '';

    for (const component of conf.components) {
        const componentPath = join(__dirname, 'components', `${component.type}.js`);
        if (existsSync(componentPath)) {
            const renderComponent = require(componentPath);
            body += renderComponent(component);
        }
    }

    return template
        .replace("{{title}}", conf.meta.title)
        .replace("{{content}}", body);
}

module.exports = createPage;