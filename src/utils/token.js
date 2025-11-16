const jwt = require('jsonwebtoken');
require('dotenv').config();

const sign = (payload, expiresIn = '7d') => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
const verify = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { sign, verify };
