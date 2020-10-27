function testGenerate() {
    event.preventDefault()

    const iatasNational = ["CGH", "POA", "CNF", "GRU", "RBR", "BEL", "SSA", "FOR", "REC", "FLN"]


    const iatasInternational = ["JFK", "SCL", "FCO", "BUE", "FLL ", "LIM", "MVD", "ASU", "JNB", "BOG", "SYD", "BOS", "JNB", "IAD",
        "LAX", "LAS", "MXP", "BRC", "LHR", "CDG", "LIS", "LIN", "BCN", "DCA", "MAD", "CPT", "AMS"]

    let response = prompt("Quantos registros quer gerar? ")

    let national = prompt("Qual a porcentagem a gerar de voos nacionais? ")
    let international = prompt("Qual a porcentagem a gerar de voos internacionais? ")


    national = parseInt(response) * (parseInt(national) / 100)
    international = parseInt(response) * (parseInt(international) / 100)

    var cont = 1;

    for (let i = 0; i < parseInt(national); i++) {
        var originNational = iatasNational[Math.floor(iatasNational.length * Math.random())]
        var destinationNational = iatasNational[Math.floor(iatasNational.length * Math.random())]
        destinationNational = processingIatas(originNational, destinationNational, ...iatasNational)

        let dates = getDates()
        let passengers = getPassengers()

        cont++;

        console.log(" | " + originNational + " | " +  destinationNational + " | " + dates[0] +  " | "
            + passengers[0] + " | " + passengers[1] + " | " + cont + " | ")
    }

    for (let i = 0; i < parseInt(international); i++) {
        var originNational = iatasNational[Math.floor(iatasNational.length * Math.random())]
        var destinationInternational = iatasInternational[Math.floor(iatasInternational.length * Math.random())]

        let dates = getDates()
        let passengers = getPassengers()

        cont++;

        console.log(" | " + originNational + " | " +  destinationInternational + " | " + dates[0] + " | "
            + passengers[0] + " | " + passengers[1] + " | ")
    }
}

function processingIatas(origin, destination, ...iatas) {
    let cityCode = {
        sao_paulo: ["GRU", "CGH", "VCP"],
        rio_de_janeiro: ["SDU", "GIG"]
    }

    for(let i = 0; i < cityCode.sao_paulo.length; i++) {
        for (let j = 0; j < cityCode.sao_paulo.length; j++) {
            if (cityCode.sao_paulo[i] === origin && cityCode.sao_paulo[j] === destination) {
                destination = iatas[Math.floor(iatas.length * Math.random())]
            }
        }
    }

    for(let i = 0; i < cityCode.rio_de_janeiro.length; i++) {
        for (let j = 0; j < cityCode.rio_de_janeiro.length; j++) {
            if (cityCode.rio_de_janeiro[i] === origin && cityCode.rio_de_janeiro[j] === destination) {
                destination = iatas[Math.floor(iatas.length * Math.random())]
            }
        }
    }

    while (origin === destination) {
        destination = iatas[Math.floor(iatas.length * Math.random())]
    }

    return destination
}

function getDates() {
    let dates = []

    let dateDeparture = Math.floor(Math.random() * 150)
    let dateReturn    = Math.floor(Math.random() * 150) + dateDeparture

    dates.push(dateDeparture)
    dates.push(dateReturn)

    return dates
}

function getPassengers() {
    let passengers = []

    let adult       = Math.floor(Math.random() * 2) + 1
    let children    = Math.floor(Math.random() * 2)

    passengers.push(adult)
    passengers.push(children)

    return passengers
}
