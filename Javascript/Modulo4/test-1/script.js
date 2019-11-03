let spaceshipName = "Supernova"

let acceleration = 0

do {
    option = showMenu()
    if (option == "1") {
        acceleration = accelerationUp(acceleration)
    } else if (option == "2") {
        if (acceleration === 0) {
            alert("Não há mais como desacelerar")
        } else {
            acceleration = accelerationDown(acceleration)
        }
    } else if (option == "3") {
        showData()
    } else if (option == "4") {
        break
    } else {
        alert("Opção inválida!")
    }
} while (option != "4")

function showMenu() {
    option = prompt("Qual opção você deseja ?" + "\n1 - Acelerar a nave em 5km/s" + "\n2 - Desacelerar em 5km/s"
        + "\n3 - Imprimir os dados de bordo" + "\n4 - Sair")
    return option
}

function accelerationUp(acceleration) {
    return acceleration += 5;
}

function accelerationDown(acceleration) {
    return acceleration -= 5;
}

function showData() {
    alert("Nome da nave: " + spaceshipName + "\nVelocidade = " + acceleration)
}