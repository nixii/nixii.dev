
// Markdown
import mdToSpan from "../generic.js";
import all from "../generic.js";

// Create the component
export default async function create(component) {
    return `<a class="component-link" href="${component.src}"${component.newPage ? 'target="_blank"' : ''}${all(component)}>${mdToSpan(component.text)}</a>`;
}