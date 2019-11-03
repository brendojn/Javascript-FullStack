let nameNavy = prompt("Digite o nome da espaçonave")

let oldChar = prompt("Qual caractere você deseja substituir?")

let newChar = prompt("Por qual caractere você deseja substituir?")

let newNavy = ""

for (let i = 0; i < nameNavy.length; i++) {
    if (nameNavy[i] === oldChar) {
        newNavy += newChar
    } else {
        newNavy += nameNavy[i]
    }
}

alert("O novo nome da nave é: " + newNavy)
