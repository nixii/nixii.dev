
// Imports
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import all from "../generic.js";

// blehh
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The template
const template = "<div class=\"component-horizontal-align\"{{style}}>{{content}}</div>";

// Create a container
export default async function create(component) {
    let body = '';
    
    for (const c of component.components) {
        const componentPath = join(__dirname, `${c.type}.js`);
        if (existsSync(componentPath)) {
            const { default: renderComponent } = await import(componentPath);
            let t = await renderComponent(c);
            body += t;
        }
    }

    return template
        .replace("{{content}}", body)
        .replace("{{style}}", all(component));
}