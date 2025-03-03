const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


const hits = {};


app.get('/hits/:pageId', (req, res) => {
    const pageId = req.params.pageId;
    hits[pageId] = (hits[pageId] || 0) + 1;
    res.send(hits[pageId].toString());
});


app.all('*', (req, res) => {
    res.status(404).send('Invalid URL.');
});


app.listen(PORT, () => {
    console.log(`✅ Server started at http://localhost:${PORT}`);
});
