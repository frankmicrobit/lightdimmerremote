input.onButtonPressed(Button.A, function () {
    Wait = true
    Threshold += -5
    basic.showNumber(Threshold)
    Wait = false
})
input.onButtonPressed(Button.AB, function () {
    Wait = true
    RespondOnSound = !(RespondOnSound)
    if (RespondOnSound) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
    Wait = false
})
input.onButtonPressed(Button.B, function () {
    Wait = true
    Threshold += 5
    basic.showNumber(Threshold)
    Wait = false
})
let SoudLevel = 0
let Wait = false
let RespondOnSound = false
let Threshold = 0
led.setBrightness(10)
Threshold = 120
RespondOnSound = false
let Brightnes = 1000
radio.setGroup(1)
Wait = false
basic.forever(function () {
    if (!(Wait)) {
        SoudLevel = input.soundLevel()
        if (SoudLevel > Threshold) {
            if (RespondOnSound) {
                radio.sendNumber(Brightnes)
            }
            basic.showNumber(SoudLevel)
        }
        led.plotBarGraph(
        SoudLevel,
        Threshold
        )
    }
})
