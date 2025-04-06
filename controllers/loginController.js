class Logincontroller {
    loginView(req, res) {
        res.render('login');
    }

    async login(req, res) {
        const { email, senha } = req.body;

        if(email==="professor" && senha==="123"){
            return res.render('correcao');
        }
        else if(email==="aluno" && senha==="123"){
            return res.render('tarefa');
        }
        else{
            return res.render('login');
        }
    }

    
}
module.exports = new Logincontroller();