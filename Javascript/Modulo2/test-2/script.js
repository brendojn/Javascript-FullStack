let distancy = prompt("Digite a distância em ano-luz")

let response = prompt("Escolha uma unidade de conversão: \n" + "1 - Parsec \n" + "2 - Unidade Astronônima \n" + "3 - Quilômetros ")

switch(response){
    case "1":
        distancyConvert = distancy / 3.26156
        break
    case "2":
        distancyConvert = distancy * 63239.74
        break
    case "3":
        distancyConvert = distancy / 0.00000000000010570
}

alert("A distância em anos-luz é: " + distancy + "\n" + "A distância convertida é: " + distancyConvert )
