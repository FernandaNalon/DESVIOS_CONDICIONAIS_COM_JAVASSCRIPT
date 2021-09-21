let dia;
switch (new Date().getDay()) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Segunda-feira";
        break;
    case 2:
        dia = "Terça-feira";
        break;
    case 3:
        dia = "Quarta-feira";
        break;
    case 4:
        dia = "Quinta-feira";
        break;
    case 5:
        dia = "Sexta-Feira";
        break;
    case 6:
        dia = "Sábado";
        break;
}
document.getElementById("teste").innerHTML = "Hoje é " + dia; 
