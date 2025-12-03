radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > miNumero) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber < miNumero) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    miNumero = randint(1, 6)
    basic.showNumber(miNumero)
    radio.sendNumber(miNumero)
})
let miNumero = 0
radio.setGroup(1)
