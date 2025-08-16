
// Markdown
import all from "../generic.js";

// Create the component
export default async function create(component) {
    return `<img class="component-image" src="${component.src}" alt="${component.alt}"${all(component)}>`;
}