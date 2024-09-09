/*
Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas

(no horário de verão na França), elaborar um programa que leia a hora no

Brasil e informe a hora na França. A Figura 3.4 ilustra a tela com dados de
entrada e saída do programa.
*/

function calcularFuso(){
  //
  const inHoraBrasil = document.getElementById('inHoraBrasil').value
  const outHoraFranca = document.getElementById('outHoraFranca')
  
  //
  if(isNaN(inHoraBrasil) || (inHoraBrasil == '' || inHoraBrasil < 0)){
    alert('Por favor, digite a hora!')
    return
  }
  
  //
  let horaNaFranca = Number(inHoraBrasil) + 5
  
  if(horaNaFranca > 24){
    horaNaFranca = horaNaFranca - 24
  }
  
  //
  outHoraFranca.textContent = 'Hora na França: ' + horaNaFranca.toFixed(2)
}

const btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularFuso)