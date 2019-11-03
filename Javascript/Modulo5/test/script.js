const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let biggerNine = hitchedSpaceships.filter( element => {
   return element[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex( element => {
    return element[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(element => {
    return element[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + biggerNine.join(", ")
message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")


alert(message)