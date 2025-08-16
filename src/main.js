
const createPage = require("./page/renderer.js");
const express = require("express");
const { fileURLToPath } = require("url");
const { join, dirname } = require("path");
const { existsSync, readFileSync } = require("fs");

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