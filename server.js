const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/admin', (req, res) => {
    res.send('Admin page!');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Hello Node JSSS! Server running on port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to Mongo");
    }).catch((error) => {
        console.log(error);
    });