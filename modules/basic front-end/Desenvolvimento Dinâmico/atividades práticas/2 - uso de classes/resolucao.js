// eu codei baseado em um único perfil

class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
         console.log("Olá, eu me chamo " + this.nome + " e tenho " + this.idade + " anos ");
    }

    trabalhar() {
        console.log("Meu cargo nessa empresa é " + this.cargo);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, departamento);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log("Estou gerenciando o departamento " + this.departamento);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, linguagem);
        this.linguagem = linguagem;
    }

    programar() {
        console.log("Desenvolvo na linguagem " + this.linguagem);
    }
}

let me = new Gerente("Roberta", 21, "Desenvolvedora Web Front-end");

 me.seApresentar();
 me.gerenciar();

 let me2 = new Desenvolvedor("Roberta", 21,  "JavaScript");
 me2.programar;


