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

    let priceOutbound = verifyApllyYield(airlinePriceOutbound, millesOutbound, ...configsOutbound)
    document.querySelector(".result-outbound").innerText = priceOutbound
    priceOutbound = priceOutbound.split("$");

    let vrTotal = 0.0

    if (configInbound[1] != undefined) {
        var priceInbound = verifyApllyYield(airlinePriceInbound, millesInbound, ...configsInbound)
        document.querySelector(".result-inbound").innerText = priceInbound
        priceInbound = priceInbound.split("$");
        if (priceInbound[1] > 0.0) {
            vrTotal = parseFloat(priceOutbound[1]) + parseFloat(priceInbound[1])
        } else {
            vrTotal = parseFloat(priceOutbound[1])
        }
    }
    document.querySelector(".result").innerText = "O valor por adulto é: R$" + vrTotal.toFixed(2)
}


function simpleCalculate(milles, ...configs) {
    if (configs[0] == "AZUL") {
        convenience = prompt("Digite o valor da taxa de conveniência da cia azul: ")
        return (milles / 1000) * convertStringFloat(configs[6]) + parseInt(convenience)
    }

    return (milles / 1000) * convertStringFloat(configs[6]);
}

function applyYield(airlinePrice, milles, ...configs) {
    let yield
    let ourPrice = simpleCalculate(milles, ...configs)
    let economy = airlinePrice - ourPrice

    if (economy < convertStringFloat(configs[8])) {
        yield = 0.0
    } else {
        yield = (economy - convertStringFloat(configs[8])) * (convertStringFloat(configs[9]) / 100)
    }
    let firstOptionYield = (ourPrice + yield) / (milles / 1000)
    let secondOptionYield = convertStringFloat(configs[10])

    if (ourPrice > airlinePrice) {
        return "Perdemos para a cia aérea R$" + ourPrice
    }

    if (firstOptionYield > secondOptionYield) {
        if(configs[0] == "AZUL") {
            return "Foi aplicado a tarifa máxima R$" + (secondOptionYield * (milles / 1000) + parseInt(convenience))
        }
        return "Foi aplicado a tarifa máxima R$" + secondOptionYield * (milles / 1000)
    } else {
        return "Aplicou o yield R$" + firstOptionYield * (milles / 1000)
    }
}

function verifyApllyYield(airlinePrice, milles, ...configs) {
    if (configs[5] === "SIM") {
        return applyYield(airlinePrice, milles, ...configs)
    } else {
        return simpleCalculate(airlinePrice, milles, ...configs)
    }
}

function convertStringFloat(value){
    value = value.replace(".","").replace(",",".");
    value = parseFloat(value).toFixed(2);
    return value;
}
