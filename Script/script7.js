var idade_anos = parseInt(prompt("Digite a sua idade: "));
var idade_meses = parseInt(prompt("Digite quantos meses você tem desde seu aniversário: "));
var idade_dias = parseInt(prompt("Digite quantos dias você tem desde seu aniverário: "));
var total_anos = idade_anos * 365;
var total_meses = idade_meses * 30;
var total_dias = total_anos + total_meses + idade_dias;
alert("A idade (somando dias, meses e anos) expressa em dias será de: " + total_dias);