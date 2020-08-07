require('dotenv').config();

const express = require('express');

const massive = require('massive')
const ctrl = require('./controller');
const app = express();

const { PORT, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then(db => {
    app.set('db', db)
    console.log('db connected roger roger')
})
.catch(err => console.log(err));



app.use(express.json());



app.listen(PORT, () => {
    console.log(`we've lost server ${PORT}`);
});