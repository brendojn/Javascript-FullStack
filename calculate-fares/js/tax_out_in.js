function calculateFare() {
    event.preventDefault()

    var convenience

    let configOutbound = document.querySelector("#txtConfigOutbound").value
    let configsOutbound = configOutbound.split(";")
    let millesOutbound = document.querySelector("#txtVrMillesOutbound").value
    let airlinePriceOutbound = document.querySelector("#txtVrOutbound").value

    let configInbound = document.querySelector("#txtConfigInbound").value
    let configsInbound = configInbound.split(";")
    let millesInbound = document.querySelector("#txtVrMillesInbound").value
    let airlinePriceInbound = document.querySelector("#txtVrInbound").value

    let configs = [];
    let airlinePrice = parseFloat(airlinePriceOutbound) + parseFloat(airlinePriceInbound)

    let priceOutbound = simpleCalculate(millesOutbound, ...configsOutbound)
    let priceInbound = simpleCalculate(millesInbound, ...configsInbound)

    if (configsOutbound[10] > configsInbound[10]) {
        for (let i = 1; i < 11; i++) {
            configs[i] = configsOutbound[i]
        }
    } else {
        for (let i = 1; i < 11; i++) {
            configs[i] = configsInbound[i]
        }
    }

    let totalMilles = parseInt(millesOutbound) + parseInt(millesInbound)

    let valuePerAdult = parseFloat(yieldTotalFlight(airlinePrice, millesOutbound, priceOutbound, millesInbound, priceInbound, totalMilles, ...configs))

    document.querySelector(".result-outbound").innerText = "O valor da perna da ida é: " + priceOutbound.toFixed(2)
    document.querySelector(".result-inbound").innerText = "O valor da perna da volta é: " + priceInbound.toFixed(2)


    document.querySelector(".result").innerText = "O valor por adulto é: R$" + valuePerAdult.toFixed(2)
}

function simpleCalculate(milles, ...configs) {

    if (configs[0] == "AZUL") {
        convenience = prompt("Digite o valor da taxa de conveniência da cia azul: ")
        return (milles / 1000) * convertStringFloat(configs[6]) + parseInt(convenience)
    }

    return (milles / 1000) * convertStringFloat(configs[6]);
}

function convertStringFloat(value) {
    value = value.replace(".", "").replace(",", ".");
    value = parseFloat(value).toFixed(2);
    return value;
}

function yieldTotalFlight(airlinePrice, millesOutbound, priceOutbound, millesInbound, priceInbound, totalMilles, ...configs) {

    let ourPrice = priceOutbound + priceInbound

    let economy = airlinePrice - ourPrice

    let yield = 0.0

    if (economy > convertStringFloat(configs[8])) {
        yield = (economy - convertStringFloat(configs[8])) * (convertStringFloat(configs[9]) / 100)
    }

    let qttMillesOutbound = millesOutbound / totalMilles
    let qttMillesInbound = millesInbound / totalMilles

    let yieldOutbound = priceOutbound + (yield * qttMillesOutbound)
    let yieldInbound = priceInbound + (yield * qttMillesInbound)

    let totalYield = yieldOutbound + yieldInbound

    let config = convertStringFloat(configs[10])

    if (totalYield / (totalMilles / 1000) < config) {
        return totalYield
    } else {
        return config * (totalMilles / 1000)
    }
}