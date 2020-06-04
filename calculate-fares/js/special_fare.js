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

    let priceOutbound = applySpecial123(airlinePriceOutbound, millesOutbound, ...configsOutbound)
    document.querySelector(".result-outbound").innerText = priceOutbound

    if (configInbound[1] != undefined) {
        var priceInbound = applySpecial123(airlinePriceInbound, millesInbound, ...configsInbound)
        document.querySelector(".result-inbound").innerText = priceInbound
    }
}

function applySpecial123(airlinePrice, milles, ...configs) {
    ourPrice = verifyApllyYield(airlinePrice, milles, ...configs)
    if (ourPrice < airlinePrice) {
        return "O voo é especial 123Milhas" + "\nO valor da cia é: R$" + airlinePrice + "\nO valor 123Milhas é: R$" + ourPrice.toFixed(2)
    } else {
        return "O voo não é Especial 123Milhas"
    }

}

function applyYield(airlinePrice, milles, ...configs) {
    let ourPrice = simpleCalculate(milles, ...configs)
    let economy = airlinePrice - ourPrice
    if (economy < convertStringFloat(configs[8])) {
        yield = 0.0
    } else {
        yield = (economy - convertStringFloat(configs[8])) * (convertStringFloat(configs[9]) / 100)
    }

    let firstOptionYield = (ourPrice + yield) / (milles / 1000)
    let secondOptionYield = convertStringFloat(configs[10])

    if (firstOptionYield > secondOptionYield) {
        if (configs[0] == "AZUL") {
            return secondOptionYield * (milles / 1000) + parseFloat(convenience)
        }
        return secondOptionYield * (milles / 1000)
    } else {
        return firstOptionYield * (milles / 1000)
    }
}

function verifyApllyYield(airlinePrice, milles, ...configs) {
    if (configs[5] === "SIM") {
        return applyYield(airlinePrice, milles, ...configs)
    } else {
        return simpleCalculate(airlinePrice, milles, ...configs)
    }
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
