let name = prompt("Qual o seu nome?");
velocity = 0;

velocity2 = prompt("Qual velocidade você quer ir?");

confirmationVelocity = confirm("Deseja confirmar a velocidade " + velocity2 + "?");

if (confirmationVelocity) {
    velocity = velocity2;
}

if (velocity < 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter")
} else if (velocity >= 80 && velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}