radio.onReceivedNumber(function (receivedNumber) {
    if (numRecibido > miNumero) {
        basic.showIcon(IconNames.Sad)
    } else if (numRecibido < miNumero) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    numRecibido = randint(1, 6)
    basic.showNumber(miNumero)
    radio.sendNumber(miNumero)
})
let miNumero = 0
let numRecibido = 0
radio.setGroup(1)
