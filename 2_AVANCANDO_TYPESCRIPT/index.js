"use strict";
// arrys numéricos
let numbers = [1, 2, 3, 4, 5];
numbers.push(5); // add num final do array
console.log(numbers);
console.log(numbers[2]);
let nomes = ["roger", "developer", "java"];
console.log(nomes);
console.log("Outra sintaxe de declaração de array(tipo o java) \n Ex: let novoArray: Array<number> = [22, 444, 5, 6]; ");
console.log("------------------------------------ \n");
let novoArray = [22, 444, 5, 6];
console.log("o tipo 'Any' aceita qualquer tipo de dado \n Ex: let dados: any = [1, 'vaga', true, [] ];");
let dados = [1, "vaga", true, []];
// parmetros tipados
function soma(a, b) {
    console.log(` O resultado da soma é: ${a + b}`);
}
soma(10, 20);
// retorno de função 
// Obrigar a função retonar apenas um tipo de dados
function greetings(name) {
    return `Olá ${name}`;
}
;
console.log(greetings("Roger"));
// Funções Anônimas 
// chmaando a função setTimeOut e configtuando outra função anonima dentro dela
setTimeout(function () {
    const salary = 1000;
    //console.log(salary);
}, 2000);
// tipos de objetos
function passCoordiantes(coord) {
    console.log(`X coordinates: ${coord.x}`);
    console.log(`Y coordinates: ${coord.y}`);
}
;
const objCoord = { x: 23455, y: 3245.5 };
passCoordiantes(objCoord);
// propriedades Opcionais 
// Quando nao precisa passae todos os argumentos
function showNumber(a, b, c) {
    console.log("A: " + a);
    console.log("b: " + b);
    if (c) {
        console.log("c: " + c);
    }
}
showNumber(2, 3, 4);
showNumber(1, 2);
// showNumber(4)
