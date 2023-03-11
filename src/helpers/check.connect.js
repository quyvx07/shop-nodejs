'use strict'

const mongodb = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

const countConnect = () => {
    const numConnection = mongodb.connections.length;
    console.log(`number connection mongodb::${numConnection}`);
    return numConnection;
}
const checkOverLoad = () => {
    setInterval(()=> {
        const numConnection = mongodb.connections.length;
        const numCore = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // example max connect mongodb
        const maxConnect = numCore*5;

        if (numConnection > maxConnect) {
            console.log('mongodb overload detected');
            // notify.send
        }

    }, _SECONDS) // monitor every 5 seconds
}

module.exports = {
    countConnect,
    checkOverLoad,
}