const express = require('express');
const ctrl = require('./controller');
const app = express();



app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`we've lost server ${PORT}`);
});