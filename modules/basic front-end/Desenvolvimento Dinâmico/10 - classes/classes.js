// Praticando o uso das classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log("Olá " + this.nome);
    }

    // usando o método do get para atribuir mais valores
    get NomeCompleto() {
        console.log("Olá " + this.nome + " " + this.sobrenome);
    }
}

p1 = new Pessoa("Fábio", "Silva");
p1.falar();
p1.NomeCompleto;