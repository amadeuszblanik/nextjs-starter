/* eslint-disable */
// Default imports
const next = require('next');
const express = require("express");

// Caching, SSR and compression
const cacheableResponse = require('cacheable-response');
const compression = require('compression');

// Config
const dotenv = require('dotenv');

// Initials
dotenv.config();
const host = '0.0.0.0';
const port = process.env.PORT;
const dev = (process.env.NODE_ENV === "DEVELOPMENT");
const app = next({ dev });

// Request handlers
const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
    get: async ({ req, res, pagePath, queryParams }) => {
        try {
            return {
                data: await app.renderToHTML(req, res, pagePath, queryParams),
                ttl: process.env.CACHE_TIME,
            }
        } catch(err) {
            return {
                data: "Error has occured" + err,
                ttl: 1
            }
        }
    },
    send: ({ data, res }) => res.send(data)
});

app.prepare().then(() => {
    const server = express();

    server.use(compression());

    server.get("/", (req, res) => ssrCache({req, res, pagePath: "/"}));

    server.all("*", (req, res) => handle(req, res));

    // @ts-ignore
    server.listen(port, host, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
