const carro = {
    marca: "Ford",
    modelo: "Mustang",
    ano: 2023,
    detalhes: function() {
      console.log(`O carro é um ${this.marca} ${this.modelo} de ${this.ano}.`);
    }
  };
  carro.cor = "Prata";
  console.log(carro);