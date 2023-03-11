const app = require("./src/app.js");

const APP_PORT = process.env.APP_PORT || 2004;
const server = app.listen(APP_PORT, function () {
    console.log(`listen port: ${APP_PORT}`);
})

process.on('SIGINT', () => {
    server.close(() => console.log('Exit......'))
    // notify
}) 