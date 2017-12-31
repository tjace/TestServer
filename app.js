console.log("hello world");

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("qweqe")

});
app.get('/home', (req, res) => res.send("This is the Home\n"+JSON.stringify(req.headers,null,4)));
app.use((req, res) => res.status(404).send("page not found <br> sorry"));
app.listen(3000);

