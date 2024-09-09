// ENVIO DE DADOS PARA O EXCEL, ENSINADO PELO CANAL YT "MANUAL DO DEV"
// LINK DO VIDEO: https://youtu.be/w7SUjrKCdwE?si=VmDgah1gnEm2epvt

function tratamentoDeEnvio(e){
    e.preventDefault();

    // Pegando os valores dos campos do html para colocar no fetch body: JSON.
    const nome = document.querySelector('input[name=nome]');
    const email = document.querySelector('input[name=email]');
    const mensagem = document.querySelector('textarea[name=mensagem]');

    fetch('https://sheetdb.io/api/v1/u2yqk7tp4mryw',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            NOME: nome.value,
            EMAIL: email.value,
            MENSAGEM: mensagem.value
        }) // Estes nomes devem ser iguais aos das colunas, inclusive em minusculos ou maiusculos, para que posam ser encontrados.
    }).then(() => {
        alert('Dados enviados com Sucesso!');
    })
    
    // Limpar campos.
    nome.value = '';
    email.value = '';
    mensagem.value = '';

    //alert('Enviado!'); // Colocado o then().
}


document.querySelector('form').addEventListener('submit', tratamentoDeEnvio)