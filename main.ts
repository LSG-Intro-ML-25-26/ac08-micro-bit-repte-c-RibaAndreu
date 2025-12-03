radio.onReceivedNumber(function (receivedNumber) {
    let numRecibido = 0
    if (numRecibido > miNum) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
    } else {
        if (numRecibido < miNum) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    miNum = randint(1, 6)
    basic.showNumber(miNum)
    radio.sendNumber(miNum)
})
let miNum = 0
radio.setGroup(1)
