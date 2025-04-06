const express = require('express'); 
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const rotaLogin = require('./routes/rotaLogin');
const rotaTarefa = require('./routes/rotaTarefa');
const rotaCorrecao = require('./routes/rotaCorrecao');

const cookieParser = require('cookie-parser');


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(cookieParser());

app.use('/', rotaLogin);
app.use('/tarefa',rotaTarefa);
app.use('/correcao',rotaCorrecao);









app.listen(5000, function() {
    console.log("servidor iniciado!");
})