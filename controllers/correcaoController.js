const inicioModel = require('../models/inicioModel');
class correcaocontroller{
    correcaoView(req, res){
        res.render('correcao.ejs');
    }

    async correcao(req, res){
        let ok;

        if(req.body.materia && req.body.prazoinput && req.body.descricaoinput){
            let cadastro = new inicioModel();
            cadastro.materiainput = req.body.materia
            cadastro.prazoinput = req.body.prazoinput
            cadastro.descricaoinput = req.body.descricaoinput
            console.log(cadastro.materiainput);
            console.log(cadastro.prazoinput);
            console.log(cadastro.descricaoinput);

            let resultado = await cadastro.cadastrar();

            if(resultado){
                res.send({ok: true,msg:'Cadastrado com sucesso!'});
            }else{
                res.send({ok: false,msg:'Erro ao cadastrar'});
            }
    
}
    }
}

module.exports = new correcaocontroller();

