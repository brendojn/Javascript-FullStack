function calculateFare() {
    event.preventDefault()

    let configOutbound = document.querySelector("#txtConfigOutbound").value
    let configsOutbound = configOutbound.split(";")
    let airlinePriceOutbound = document.querySelector("#txtVrPriceCiaOutbound").value
    let partnerPriceOutbound = document.querySelector("#txtVrPartnerOutbound").value

    let configInbound = document.querySelector("#txtConfigInbound").value
    let configsInbound = configOutbound.split(";")
    let airlinePriceInbound = document.querySelector("#txtVrPriceCiaInbound").value
    let partnerPriceInbound = document.querySelector("#txtVrPartnerInbound").value


    let priceOutbound = applyConventionalFare(airlinePriceOutbound, partnerPriceOutbound, ...configsOutbound)
    document.querySelector(".result-outbound").innerText = priceOutbound

    if (configInbound[1] != undefined) {
        let priceInbound = applyConventionalFare(airlinePriceInbound, partnerPriceInbound, ...configsInbound)
        document.querySelector(".result-inbound").innerText = priceInbound
    }
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

    let yield = applyYield(partnerPrice, economyFare, ...configs)
    let maximum = maximumFare(partnerPrice, ...configs)

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

function applyPlus(price, ...configs) {
    return price + (price * (parseFloat(configs[8].toString().replace(".", ",")) / 100))
}

function convertStringFloat(value) {
    value = value.replace(".", "").replace(",", ".");
    value = parseFloat(value).toFixed(2);
    return value;
}


