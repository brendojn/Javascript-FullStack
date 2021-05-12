function calculateFare() {
    event.preventDefault()

    let vrHotel = document.querySelector("#txtVrHotel").value
    let percentMarkup = document.querySelector("#txtVrMarkup").value
    let vrFixed = document.querySelector("#txtVrFix").value

    let priceHotel = applyFare(vrHotel, percentMarkup, vrFixed)

    document.querySelector(".result").innerText = "O valor do hotel é: R$" + priceHotel.toFixed(2)

}

function applyFare(vrHotel, percentMarkup, vrFixed) {
    console.log(vrHotel / ((100-percentMarkup)/100))
    console.log(parseFloat(vrHotel) + parseFloat(vrFixed))

    if ( vrHotel / ((100-percentMarkup)/100) >  (parseFloat(vrHotel) + parseFloat(vrFixed)) ) {
        return vrHotel / ((100-percentMarkup)/100)
    } else {
        return parseFloat(vrHotel) + parseFloat(vrFixed)
    }
}

function convertStringFloat(value) {
    value = value.replace(".", "").replace(",", ".");
    value = parseFloat(value).toFixed(2);
    return value;
}


