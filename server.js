const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(`${base}/index.html`);
});

app.get('/graph', function (req, res) {
    res.sendFile(`${base}/graph.html`);
});

app.get('/light', function (req, res) {
    res.sendFile(`${base}/light.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});