document.addEventListener('DOMContentLoaded', function () {
    let btncadastrar = document.getElementById('btn-cadastrar');
    btncadastrar.addEventListener('click', cadastrar);

    function cadastrar() {
        console.log("Função cadastrar() foi chamada");

        // Coleta os dados do formulário
        const materia = document.getElementById('materia');
        const prazo = document.getElementById('prazoInput');
        const descricao = document.getElementById('descricaoInput');

        let obj = {
            materia: materia.value,
            prazo: prazo.value,
            descricao: descricao.value
        };
        console.log("Dados enviados", obj);

        let formdata = new FormData();
        let stringObj = JSON.stringify(obj);

        // Envia os dados para o servidor via fetch
        fetch('/correcao', {
            method: 'POST', // Envia como JSON
            headers: {
            'Content-Type': 'application/json'
            },
            body: stringObj,
           })
        .then((r) => {
            return r.json();
          })
          .then((r) => {
            if (r.ok) {
              alert(r.msg);
              window.location.href = "/";
            } else {
              alert(r.msg);
            }
          })
          .catch(function (e) {
            console.error("erro no fatch" + e);
          });
    }
});
