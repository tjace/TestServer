console.log("hello world");



const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("qweqe"));

app.listen(3000);