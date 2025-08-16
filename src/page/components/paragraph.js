
// Markdown
import mdToSpan from "../../markdown.js";
import all from "../generic.js";

// Create the component
export default async function create(component) {
    return `<p class="component-paragraph"${all(component)}>${mdToSpan(component.text)}</p>`;
}