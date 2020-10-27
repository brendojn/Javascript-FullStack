function calculateFare() {
    event.preventDefault()

    let config = document.querySelector("#txtConfig").value
    let configs = config.split(";")
    let airlinePrice = document.querySelector("#txtVrPriceCia").value
    let partnerPrice = document.querySelector("#txtVrPartner").value

    let price = applyConventionalFare(airlinePrice, partnerPrice, ...configs)
    document.querySelector(".result-outbound").innerText = price
}

function applyConventionalFare(airlinePrice, partnerPrice, ...configs) {
    newPricePartner = ApplyFare(airlinePrice, partnerPrice, ...configs)

    if (newPricePartner != partnerPrice) {
        return "Foi aplicado a tarifa convencional" + "\nO valor do parceiro antes de ser aplicado é: R$" + partnerPrice + "\nO novo valor do parceiro é: R$" + newPricePartner.toFixed(2)
    } else {
        return "Não foi aplicado a tarifa convencional"
    }
}

function ApplyFare(airlinePrice, partnerPrice, ...configs) {
    let economyFare = economy(airlinePrice, partnerPrice, ...configs)
    console.log(economyFare)
    let yield = applyYield(partnerPrice, economyFare, ...configs)
    let maximum = maximumFare(partnerPrice, ...configs)
    console.log(yield)
    console.log(maximum)
    if (yield < maximum) {
        if (typeof configs[8] === 'undefined') {
            return yield
        }
        return applyPlus(yield, ...configs)
    } else {
        if (typeof configs[8] === 'undefined') {
            return maximum
        }
        return applyPlus(maximum, ...configs);
    }

}

function applyYield(partnerPrice, economy, ...configs) {
    return parseFloat(partnerPrice) + parseFloat(economy * (configs[6] / 100));
}

function maximumFare(partnerPrice, ...configs) {
    return partnerPrice * convertStringFloat(configs[4]);
}

function economy(airlinePrice, partnerPrice, ...configs) {
    let economyFare = (airlinePrice - partnerPrice) - parseFloat(configs[5]);

    if (economyFare >= 0) {
        return economyFare
    } else {
        return 0.0
    }
}

function convertStringFloat(value) {
    value = value.replace(".", "").replace(",", ".");
    value = parseFloat(value).toFixed(2);
    return value;
}

function applyPlus(price, ...configs) {
    return price + (price * (configs[8] / 100))
}
