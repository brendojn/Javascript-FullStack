let spaceshipName = prompt("Digite o nome da nave espacial: ")
let charForbidden = "e"

let newSpaceshipName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] !== charForbidden) {
        newSpaceshipName += spaceshipName[i]
    } else {
        break
    }
}



alert("O nome original da nave é: " + spaceshipName + "\nO nome após a inversão é: " + newSpaceshipName);