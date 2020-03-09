class Pessoa {
  constructor(nome, rg, cpf) {
  this.nome = nome;
  this.rg = rg;
  this.cpf = cpf;
  }

  mostrarNome() {
    console.log(this.nome);
  }

  mostrarRg() {
    console.log(this.rg);
  }

  mostrarCpf() {
    console.log(this.cpf);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, rg, cpf, rf, salario) {
    super(nome, rg, cpf);
    this.rf = rf;
    this.salario = salario;
  }

  mostrarRegistroFuncionario() {
    console.log(this.rf);
  }

  mostrarSalario() {
    console.log(this.salario);
  }
}

const diego = new Funcionario('diego', '123', '333', '43', 'R$1000');

diego.mostrarSalario();