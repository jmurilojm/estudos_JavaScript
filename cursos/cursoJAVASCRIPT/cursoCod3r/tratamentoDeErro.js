// Try - Catch - Throw
function tratarErro(erro){
  // avisos de erro
  throw new Error('mensagem de aviso')
  throw 10
  throw true
  throw 'Mensagem'
  
  // ou pode ser um objeto
  throw {
    nome: erro.nome,
    msg: erro.message,
    data: new Date
  }
}

function imprimirNome(obj){
  try{
    console.log(obj.nome.toUpperCase() + '!!!')
    console.log('Tentei e deucerto');
  } catch (excessao){
    console.log('mensagem de erro');
    // passando uma funcao caso de um erro
    tratarErro(excessao);
  } finally{
    console.log('Executado com ou sem problemas');
  }
}

const obj = {nome: 'Fulano'}
imprimirNome(obj);

