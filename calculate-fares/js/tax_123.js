function calculateFare() {
    event.preventDefault()

    let configOutbound = document.querySelector("#txtConfigOutbound").value
    let configsOutbound = configOutbound.split(";")
    let millesOutbound = document.querySelector("#txtVrMillesOutbound").value
    let airlinePriceOutbound = document.querySelector("#txtVrOutbound").value

    let vrFixed = document.querySelector("#txtVrFixed").value
    let vrPercent = document.querySelector("#txtVrPercentage").value

    let configInbound = document.querySelector("#txtConfigInbound").value
    let configsInbound = configInbound.split(";")
    let millesInbound = document.querySelector("#txtVrMillesInbound").value
    let airlinePriceInbound = document.querySelector("#txtVrInbound").value

    let priceOutbound = applyFee123(airlinePriceOutbound, millesOutbound, vrFixed, vrPercent,  ...configsOutbound)
    document.querySelector(".result-outbound").innerText = priceOutbound

    let vrTotal = 0.0

    if (configInbound[1] != undefined) {
        var priceInbound = applyFee123(airlinePriceInbound, millesInbound, vrFixed, vrPercent, ...configsInbound)
        document.querySelector(".result-inbound").innerText = priceInbound
    }
}

function applyFee123(airlinePrice, milles, vrFixed, vrPercent, ...configs ) {
    let ourPrice = simpleCalculate(milles, ...configs)

    if (ourPrice > airlinePrice) {
        var newAirlinePrice = selectVrFixedOrPercent(airlinePrice, vrFixed, vrPercent)
        return "O card é tarifa 123Milhas" + "\nO valor da cia é: R$" + newAirlinePrice + "\nO valor 123Milhas é: R$" + ourPrice
    } else {
        return "O card não é Tarifa 123Milhas"
    }

}

function selectVrFixedOrPercent(airlinePrice, vrFixed, vrPercent) {
    vrFixed = parseFloat(airlinePrice) + parseFloat(vrFixed)
    vrPercent = parseFloat(airlinePrice) + (airlinePrice * vrPercent / 100)

    if (vrFixed > vrPercent) {
        return vrFixed
    }

    return vrPercent
}


function simpleCalculate(milles, ...configs) {
    if (configs[0] == "AZUL") {
        let convenience = prompt("Digite o valor da taxa de conveniência da cia azul: ")
        return (milles / 1000) * convertStringFloat(configs[6]) + parseInt(convenience)
    }

    return (milles / 1000) * convertStringFloat(configs[6]);
}

function convertStringFloat(value){
    value = value.replace(".","").replace(",",".");
    value = parseFloat(value).toFixed(2);
    return value;
}
