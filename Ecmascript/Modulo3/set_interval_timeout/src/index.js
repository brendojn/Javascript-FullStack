let timeoutId = setTimeout(() => {
    console.log("Executando após 2 segundos")
}, 2000)

clearTimeout(timeoutId)

let seconds = 0
let intervalId =setInterval(() => {
    seconds += 2
    console.log(`Executando após ${seconds} segundos`)
    if (seconds >= 10 ) {
        clearInterval(intervalId)
    }
}, 2000)

