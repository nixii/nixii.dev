
// Requirements
import { marked } from "marked";

// The renderer for markdown
const renderer = new marked.Renderer();

// Override the methods
renderer.link = (t) => {
  return `<a class="md-link" href="${t.href}" target="_blank" rel="noopener noreferrer">${t.text}</a>`;
};

marked.setOptions({ renderer });

// Parse markdown
export default function parse(text) {
    return marked.parseInline(text);
}