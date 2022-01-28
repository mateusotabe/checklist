const express = require('express');
const app = express();

//isso é  uma rota
app.get('/checkList', (req, res) => {
    res.send('Hello World');
});

app.listen(3000);