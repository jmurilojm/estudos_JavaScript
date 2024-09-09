function calcularEquacaoSegundoGrau() {
  // referencias
  const a = document.getElementById('a').value
  const b = document.getElementById('b').value
  const c = document.getElementById('c').value
  const retorno = document.getElementById('retorno')
  const retorno2 = document.getElementById('retorno2')


  // tratamento de dados
  const delta = Number(b) ** 2 - 4 * Number(a) * Number(c);

  if (delta < 0) {
    retorno.textContent = 'Delta = Negativo';
    retorno2.textContent = 'Raizes Nulas'
  } else {
    const raizDelta = Math.sqrt(delta);

    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    retorno.textContent = 'Raiz de X¹ = ' + x1
    retorno2.textContent = 'Raiz de X² = ' + x2
  }
}

function limpar(){
  document.getElementById('a').value = ''
  document.getElementById('b').value = ''
  document.getElementById('c').value = ''
}

const btnCalcular = document.getElementById('btn')
btnCalcular.addEventListener('click', calcularEquacaoSegundoGrau)

const btnLimpar = document.getElementById('btn2')
btnLimpar.addEventListener('click', limpar)