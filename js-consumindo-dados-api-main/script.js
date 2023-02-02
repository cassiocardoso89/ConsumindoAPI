var logradouro = document.getElementById('endereco');
var bairro = document.getElementById('bairro');
var cidade = document.getElementById('cidade');
var estado = document.getElementById('estado');

async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try
    {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertiva = await consultaCEP.json();
        if(consultaCEPConvertiva.erro)
        {
            throw Error('Cep nao existente');
        }

        logradouro.value = consultaCEPConvertiva.logradouro;
        bairro.value = consultaCEPConvertiva.bairro;
        cidade.value = consultaCEPConvertiva.localidade;
        estado.value = consultaCEPConvertiva.uf;

        console.log(consultaCEPConvertiva);
        return consultaCEPConvertiva;
    }
    catch(erro)
    {
        mensagemErro.innerHTML = `<p>CEP inválido</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))


