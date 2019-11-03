class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.velocity = 0
    }

    static get acceleration() {
        return 0.17
    }

    accelerationToUp(acceleration) {
        console.log(acceleration)
        console.log(this.acceleration)
        this.velocity += (acceleration * (1 - Spaceship.acceleration))
    }
}

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que deseja fazer?\n" +
            "1- Acelerar a Nave\n" +
            "2- Trocar a Nave\n" +
            "3- Imprimir e sair do programa")
    }
    return chosenOption
}

function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceship) {
    alert("Nome: " + spaceship.name +
          "\nQuantidade de tripulantes: " + spaceship.crewQuantity +
          "\nVelocidade atual: " + spaceship.velocity)
}

let spaceshipToAdd = createSpaceship()
let chosenOption

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            spaceshipToAdd.accelerationToUp(Number(prompt("Digite o valor de aceleração: ")))
            break
        case "2":
            spaceshipToAdd = createSpaceship()
            break
        case "3":
            printSpaceshipList(spaceshipToAdd)
            break
    }
}


