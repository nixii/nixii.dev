
// Markdown
import mdToSpan from "../../markdown.js";
import all from "../generic.js";

// Create the component
export default async function create(component) {
    return `<h1 class="component-title"${all(component)}>${mdToSpan(component.text)}</h1>`;
}