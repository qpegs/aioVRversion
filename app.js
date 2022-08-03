const express = require('express');

const app = express();

app.get('/version', (req, res) =>{
    res.send('1');
});

app.listen(3000);