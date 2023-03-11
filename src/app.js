const path = require('path');
const { getFileNameEnv } = require('./configs/dot.env.js');
console.log('ssss', path.join(__dirname, getFileNameEnv()));
require('dotenv').config({ path: path.join(__dirname, getFileNameEnv()) });
const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");

const app = express();

//init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//init db
require('./dbs/init.mongodb.js');

app.get('/', (req, res, next) => {
    let strCompress = 'hello ';
    return res.status(200).json({
        messenger: 'dong y',
        metadata: strCompress.repeat(10000)
    })
})


module.exports = app