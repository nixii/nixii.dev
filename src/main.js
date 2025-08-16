
import createPage from "./page/renderer.js";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { existsSync, readFileSync } from "fs";

// blehh
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use('/static', express.static('public'));

async function handlePage(to, req, res) {
    const filePath = join(__dirname, '../pages', `${to}.json`);

    if (!existsSync(filePath)) {
        handlePage("404", req, res);
        return;
    }

    const pageConfig = JSON.parse(readFileSync(filePath, 'utf-8'));
    const page = await createPage(pageConfig);
    res.send(page);
}

app.get('/music/:pageName', (req, res) => {
    const filePath = join(__dirname, "../music/", `${req.params.pageName}`);
    console.log(filePath);

    if (!existsSync(filePath)) {
        handlePage("404", req, res);
        return;
    }

    res.type("ogg")
    res.sendFile(filePath);
});

app.get('/', async(req, res) => {
    await handlePage('home', req, res);
});

app.get('/:pageName', async (req, res) => {
    const pageName = req.params.pageName;
    await handlePage(pageName, req, res);
});

app.listen(4000);