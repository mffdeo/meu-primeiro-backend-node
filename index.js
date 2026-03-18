const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API RODANDO');
});

app.listen(3000, () => {
    console.log('SERVIDOR RODANDO NA PORTA 3000');
});