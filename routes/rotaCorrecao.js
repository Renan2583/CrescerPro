const express = require('express');
const Correcaoctrl = require('../controllers/correcaoController');
const rotaCorrecao = express.Router();

rotaCorrecao.get('/', Correcaoctrl.correcaoView);
rotaCorrecao.post('/correcao', Correcaoctrl.correcao);

module.exports = rotaCorrecao;