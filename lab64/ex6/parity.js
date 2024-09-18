const prompt=require("prompt-sync")({sigint:true}); 

const number = parseInt(prompt("Digite um número: "));

if (number % 2 === 0) {
    console.log("Este número é par!")
} else {
    console.log("Este número é ímpar!")
}