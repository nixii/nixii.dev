
// Markdown
import mdToSpan from "../../markdown.js";
import all from "../generic.js";

// Create the component
export default async function create(component) {
    return `<h2 class="component-subtitle"${all(component)}>${mdToSpan(component.text)}</h2>`;
}