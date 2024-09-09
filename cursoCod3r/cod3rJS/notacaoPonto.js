console.log(Math.ceil(6.12))


const obj1 = {} // objeto
obj1.nome = 'TV'; // add
obj1['tam'] = 43; // add
console.log(obj1);


// outra forma de OBJETO
function Obj(nome){
  this.nome = nome; // atributo
  
  this.infor = function(){
    console.log(this.nome)
  } // metodo
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Bola');
console.log(obj2)
console.log(obj3)

obj2.infor()
obj3.infor()