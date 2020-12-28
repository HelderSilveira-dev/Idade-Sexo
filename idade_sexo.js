
var idade = 12;


if (idade >= 18) {
    console.log("Maior de Idade");
}else{
    console.log("Menor de Idade");
}

if (idade <= 14) {
    console.log("Criança");
}else if (idade > 14 && idade < 18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
}

var sexo = "0";

switch (sexo) {
    case "m":
        console.log("Masculino");
        break;
    case "f":
        console.log("Feminino");
        break;

    default:
        console.log("Desconhecido");
        break;
}


