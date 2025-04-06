const express = require('express');
const Tarefactrl = require('../controllers/tarefaController');
const rotaTarefa = express.Router();

rotaTarefa.get('/', Tarefactrl.tarefaView);


module.exports = rotaTarefa;