const time = new Date().getHours();
let cumprimento;

if (time < 10) {
    cumprimento = "Bom dia!";
} else if (time < 18) {
    cumprimento = "Boa tarde!";
} else {
    cumprimento = "Boa noite!";
}
document.getElementById("teste").innerHTML = cumprimento;