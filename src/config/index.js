require('dotenv').config()

const env = process.env.TARGET_ENV || 'development'
const config = require(`./${env}`);

module.exports = config || {};
