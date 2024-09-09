// ESSES DADOS ESTAO SENDO ENVIADO DE ACORDO COM O QUE FOI ENSINADO PELA PROFESSORA ROSI VOLGARIN NO YOUTUBE
// LINK DO VIDEO: https://youtu.be/Z9NlCcUG924?si=YZuTjMNGr0Q8JHw6

const scriptDoGoogle = 'https://sheetdb.io/api/v1/u2yqk7tp4mryw'; // MINHA CHAVE DO SHEETDB
const dadosDoFormulario = document.forms['formulario-contato'];

dadosDoFormulario.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(scriptDoGoogle, { method: 'POST', body: new FormData(dadosDoFormulario) })
    .then(response => {
        if (response.ok) {
            alert('Dados enviados com sucesso!');
            dadosDoFormulario.reset();
        } else {
            alert('Falha ao enviar os dados. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro no envio dos dados!', error);
        alert('Erro no envio dos dados!');
    });
});
