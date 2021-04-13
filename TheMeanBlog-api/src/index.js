const express = require('express');
const postRouter = require('./routers/post');
require('./db/mongoose');

const app = express();

app.use(express.json());

app.all('/*', (req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    resp.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.use(postRouter);

app.listen(3000, () => {
    console.log('app is running on port 3000');
});