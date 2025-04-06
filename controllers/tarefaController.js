class tarefacontroller{
    tarefaView(req, res){
        res.render('tarefa.ejs');
    }
}

module.exports = new tarefacontroller();

