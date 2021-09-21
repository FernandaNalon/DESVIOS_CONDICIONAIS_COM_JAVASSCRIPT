var numero = +(prompt("Digite um número: "));
var numero1 = +(prompt("Digite outro número: "));
var operacao = (prompt("Você quer somar, dividir, multiplicar ou subtrair? "))
var sub;
var soma;
var div;
var mult;

if (operacao == "subtrair") {
    sub = numero - numero1;
    alert("A subtração dos dois valores será: " + sub);
} else if (operacao == "somar") {
    soma = numero + numero1;
    alert("A soma dos dois valores será: " + soma);
} else if (operacao == "dividir") {
    div = numero / numero1;
    alert("A divisão dos dois valores será: " + div);
} else if (operacao == "multiplicar") {
    mult = numero * numero1;
    alert("A multiplicação dos dos valores será: " + mult);
} else {
    alert("Operação invalida ou não identificada.");
}