document.querySelector("#inputCep").addEventListener("blur", function () {
    let cep = this.value.replace(/\D/g, "");

    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json`)

            .then(resposta => resposta.json())

            .then(dados => {
                if (!dados.erro) {
                    document.querySelector("#inputRua").value = dados.logradouro;
                    document.querySelector("#inputBairro").value = dados.bairro;
                    document.querySelector("#inputCidade").value = dados.localidade;
                    document.querySelector("#inputEstado").value = dados.uf;
                } else {
                    alert("CEP não encontrado!");
                }
            })
            .catch(erro => {
                alert("Erro ao buscar o CEP!");
            })
    } else {
        document.querySelector("#inputRua").value = "";
        document.querySelector("#inputBairro").value = "";
        document.querySelector("#inputCidade").value = "";
        document.querySelector("#inputEstado").value = "";
    }
});