const express = require('express');
const Loginctrl = require('../controllers/logincontroller');
const rotaLogin = express.Router();



rotaLogin.get('/', Loginctrl.loginView);
rotaLogin.post('/', Loginctrl.login);

module.exports = rotaLogin;