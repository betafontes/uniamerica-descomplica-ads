// Praticando com exemplos o uso de Heranças
class DispositivoEletronico {
    constructor(nome) {
        this.nome =nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log("Já está ligado")
            return;
        }
        this.ligado = true;
    }
}


// método extends tudo que tiver no DispositovEletronico, vai para o SmartPhone
class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new SmartPhone("Samsung", "Preto", "A71");
console.log(s1);
s1.ligar(); // iniciando
// verificando se está ligado
s1.ligar();