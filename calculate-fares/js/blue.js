function calculateFare() {
    event.preventDefault()

    let cia1 = document.querySelector("#txtVrCia").value

    let configOutbound = document.querySelector("#txtConfigOutbound").value
    let configsOutbound = configOutbound.split(";")
    let conventionalPriceOutbound = document.querySelector("#txtVrConventionalOutbound").value


    let priceOutbound = applyBlueFare(conventionalPriceOutbound, ...configsOutbound)
    document.querySelector(".result-outbound").innerText = priceOutbound

    let upFareBlue = document.querySelector("#txtUpFareBlue").value
    let priceCias = addFareCias(cia1, upFareBlue)

    document.querySelector(".result").innerText = priceCias

}

function applyBlueFare(conventionalPrice, ...configs) {
    newPrice = applyFare(conventionalPrice, ...configs)

    if (newPrice != conventionalPrice) {
        return "Foi aplicado a tarifa blue" + "\nO valor convencional antes de ser aplicado blue é: R$" + conventionalPrice + "\nO novo valor é: R$" + newPrice.toFixed(2)
    } else {
        return "Não foi aplicado a tarifa blue"
    }
}

function addFareCias(cia1, upFareBlue) {
    cia1 = cia1 * ((upFareBlue / 100) + 1)

    return "A tarifa da cia  foi alterada para R$" + cia1.toFixed(2)
}

function applyFare(conventionalPrice, ...configs) {
    return (conventionalPrice - ((convertStringFloat(configs[4]) / 100) * conventionalPrice))
}

function convertStringFloat(value) {
    value = value.replace(".", "").replace(",", ".");
    value = parseFloat(value).toFixed(2);
    return value;
}


