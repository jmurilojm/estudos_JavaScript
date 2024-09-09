/*
Obs.: Antes de realizar o procedimento de export e import, o link script, no html, deve haver a informação de que o tipo é "module".
*/

import mensagem1 from './testes-modulo.js'; // "export defalt". nesse caso, pode ser dado qualquer apelido.
import {msm2 as msm} from './testes-modulo.js'; // apenas "export". nesse caso devera ser mesmo nome da funcao. usando o "as" para poder dar um apelido.
//import mensagem1, {msm2 as msm} from '/testes-modulo.js'; // os dois tipos de export podem ser chamados em um único import.


console.log('Essa mensagem é do arquivo principal.');
mensagem1(); // vem do import de um export default.
msm(); // vem de um import export.