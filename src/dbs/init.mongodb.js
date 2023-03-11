const mongoose = require('mongoose')
const { db: { DB_HOST, DB_PORT, DB_NAME } } = require('../configs/config');
const connectString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const { countConnect } = require('../helpers/check.connect.js');

class Database {
    constructor() {
        this.connect();
    }
    connect(type = 'mongodb') {
        if (1 == 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose.connect(connectString, {
            maxPoolSize: 100
        })
            .then(_ => console.log('Mongoose connected', countConnect()))
            .catch(() => console.log('Mongoose Errors'))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database;
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;