var salario_mensal = parseFloat(prompt("Digite o seu salário mensal: "));
var perc_reajuste = parseFloat(prompt("Digite o percentual de reajuste: "));
var valor_reajuste = salario_mensal * perc_reajuste / 100;
var salario_novo = salario_mensal + valor_reajuste;

alert("O valor do seu salário sendo de: R$" + salario_mensal + ", O reajuste sendo: " + perc_reajuste + "%, será de: R$" + valor_reajuste + ". Sendo assim, o novo salário (reajustado) será de: R$" + salario_novo + ",00.");