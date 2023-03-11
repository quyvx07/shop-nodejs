const path = require('path');
const getFileNameEnv = () => {
    let environment = process.env.NODE_ENV;
    let fileNameEnv = '.env';
    switch (environment) {
        case 'pro':
            fileNameEnv = `.env.${environment}`;
            break;
        default:
            break;
    }
    return `../${fileNameEnv}`;
}
module.exports = {
    getFileNameEnv
}