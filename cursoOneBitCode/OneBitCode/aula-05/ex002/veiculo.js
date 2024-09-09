// Veículo e Passageiros

const veiculo = {
  modelo: 'Carro',
  passageiros: [],
  limiteDePassageiros: 5,
  velocidade: 0,

  acelerar: function() {
    this.velocidade++
  },
  frear: function() {
    this.velocidade--
  },
  adddPassageiro: function(p) {
    if (this.velocidade != 0) {
      alert(`
      O veículo em movimento!
      
      Por favor, pare o veículo para que o passageiro possa entrar.`)
    } else {
      if (this.passageiros.length < this.limiteDePassageiros) {
        this.passageiros.push(p)
      } else {
        alert(`
      Não há vagas!
      `)
      }
    }
  },
  retirarPassageiro: function() {
    if (this.velocidade != 0) {
      alert(`
      Veiculo em movimento!
      
      Por favor, pare o veículo para retirar o passageiro.`)
    } else {
      if (this.passageiros == 0) {
        alert(`Não existe passageiros`)
      } else {
        this.passageiros.pop()
        alert(`O passageiro foi retirado.`)
      }
    }
  },
  infor: function() {
    console.log(this)
  }
}