let nameNavy = prompt("Digite o nome da nave: ")

let response = "1";

let fold = 0;

while (response == "1") {
    response = prompt("Deseja entrar em dobra espacial: \n" + "1- Sim\n" + "2- Não")
    if (response == "1") {
        fold++
    }
}

alert("O nome da nave é: " + nameNavy + " e a quantidade de dobras realizadas é: " + fold)