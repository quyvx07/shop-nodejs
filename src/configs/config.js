module.exports = {
    app: {
        port: process.env.APP_PORT
    },
    db: {
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_PORT: process.env.DB_PORT || 27017,
        DB_NAME: process.env.DB_NAME || 'shop',
    }
}