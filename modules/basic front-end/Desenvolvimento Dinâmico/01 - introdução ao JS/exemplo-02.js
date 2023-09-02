// usando o pacote node readline-sync
let rlSync = require("readline-sync");

let nome = rlSync.question("Qual o seu nome?\n");
console.log(`Olá, ${nome}`);

let idade = rlSync.question("Qual a sua idade?\n");
console.log(`Sua idade é : ${idade}`);

