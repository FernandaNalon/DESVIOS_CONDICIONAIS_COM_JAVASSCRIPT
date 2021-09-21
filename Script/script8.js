var total_eleitores = parseInt(prompt("Digite o número total de eleitores: "));
var votos_validos = parseFloat(prompt("Digite o número total de votos válidos: "));
var votos_branco = parseFloat(prompt("Digite o número total de votos em branco: "));
var votos_nulos = parseFloat(prompt("Digite o número total de votos nulos: "));
perc_validos = votos_validos * 100 / total_eleitores;
perc_branco = votos_branco * 100 / total_eleitores;
perc_nulos = votos_nulos * 100 / total_eleitores;

alert("O total de eleitores foi de: " + total_eleitores + ", o total de votos válidos foram de: " + votos_validos + ", o total de votos em branco foram de: " + votos_branco + " e o total de votos nulos foram de: " + votos_nulos + ".");
alert("Logo, o percentural de votos válidos foi de: " + perc_validos + "%, de votos em branco: " + votos_branco + "% e de votos nulos foi de: " + votos_nulos + "%.");