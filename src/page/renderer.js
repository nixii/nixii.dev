
// Get needed things
import { existsSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

// blehh
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the template
const template = readFileSync(join(__dirname, '../../pages/base.html'), 'utf-8');

// Create a page
export default async function createPage(conf) {
    let body = '';

    for (const component of conf.components) {
        const componentPath = join(__dirname, 'components', `${component.type}.js`);
        if (existsSync(componentPath)) {
            const { default: renderComponent } = await import(componentPath);
            body += await renderComponent(component);
        }
    }

    return template
        .replace("{{title}}", conf.meta.title)
        .replace("{{content}}", body);
}