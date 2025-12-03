input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    let miNumero = 0
    numRecibido = randint(1, 6)
    basic.showNumber(miNumero)
    radio.sendNumber(miNumero)
})
let numRecibido = 0
radio.setGroup(1)
