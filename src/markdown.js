
// Requirements
const { marked } = require("marked");

// The renderer for markdown
const renderer = new marked.Renderer();

// Override the methods
renderer.link = function (href, title, text) {
    return `<a class="md-link" href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
};

marked.setOptions({ renderer });

// Parse markdown
function parse(text) {
    return marked.parseInline(text);
}

module.exports = parse;