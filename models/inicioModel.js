const Database = require('../utils/database');
const db = new Database();

db.ExecutaComando('SELECT 1', [])
    .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));


class inicioModel{
    #id;
    #materia;
    #prazoinput;
    #descricaoinput;

    constructor(id,materia, prazoinput, descricaoinput){
        this.#id = id;
        this.#materia = materia;
        this.#prazoinput = prazoinput;
        this.#descricaoinput = descricaoinput;
    }

    get id(){
        return this.#id;
    }

    get materia(){
        return this.#materia;
    }

    get prazoinput(){
        return this.#prazoinput;    
    }

    get descricaoinput(){    
        return this.#descricaoinput;
    }

    set id(value){
        this.#id = value;
    }

    set materia(value){
        this.#materia = value;
    }

    set prazoinput(value){
        this.#prazoinput = value;
    }

    set descricaoinput(value){
        this.#descricaoinput = value;
    }

    async cadastrar(){
        let sql = `INSERT INTO tb_tarefa (nome_materia,prazo_atividade,descr_atividade) VALUES (?,?,?)`;
        let valores = [this.#materia, this.#prazoinput, this.#descricaoinput];
        console.log("Tentando inserir:",valores);

        try{
            let resultado = await db.ExecutaComandoNonQuery(sql, valores);
            console.log("Resultado do banco",resultado);
            return resultado;
        }catch(error){
            console.error("Erro ao inserir no banco",error);
            return {ok: false,msg : "Erro ao inserir no banco."};
        }
    }
}

module.exports = inicioModel;

