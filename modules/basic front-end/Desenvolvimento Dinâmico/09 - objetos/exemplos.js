// Formas de criar objetos

// Exemplo 1 :
    const pessoa = {
        nome: 'Lucas',
        sobrenome: 'Silva'
    }

    console.log(pessoa ['sobrenome']); 


// Exemplo 2 :
const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Joana"

console.log(funcionario.nome);


// Exemplo 3 : Criando objetos em forma de função
function criarPessoa(nome,sobrenome, i) {
    return { 
        nome,
        sobrenome,
        idade: i,

         get nomeCompleto() { 
            return `${this.nome} ${this.sobrenome}`;
        }
    }          
}

const p1 = criarPessoa("Arthur", "Siva", 20);
const p2 = criarPessoa("João", "Fontes",34);

console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);