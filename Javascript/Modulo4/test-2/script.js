function spaceShipStop(velocity, printer) {
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada. As comportas podem ser abertas")
}

spaceShipStop(150, velocity => alert("Velocidade atual: " + velocity))



