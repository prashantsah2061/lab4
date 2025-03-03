const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Object to store page hits (resets on server restart)
const hits = {};

// API to track page visits
app.get('/hits/:pageId', (req, res) => {
    const pageId = req.params.pageId;
    hits[pageId] = (hits[pageId] || 0) + 1;
    res.send(hits[pageId].toString());
});

// 404 Error Handling
app.all('*', (req, res) => {
    res.status(404).send('Invalid URL.');
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server started at http://localhost:${PORT}`);
});
