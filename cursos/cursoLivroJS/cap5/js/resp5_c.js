/*
c) Elaborar um programa que leia nome e número de acertos de candidatos inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no botão Aprovados 2ª Fase, ler o número de acertos para aprovação dos candidatos para a 2ª fase do concurso, conforme ilustra a Figura 5.14. Ο programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos (Figura 5.15). Caso nenhum candidato tenha sido aprovado, exibir mensagem.
*/

let candidatos = []
const nome = 'fulano'
const acertos = 8

candidatos.push({nome:nome, acertos:acertos})

let lista = ''
for(let i = 0; i < candidatos.length; i++){
  lista += candidatos[0].nome + ' - ' + candidatos[0].acertos + ' / '
}
alert(lista)