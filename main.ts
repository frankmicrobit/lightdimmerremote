input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onSound(DetectedSound.Loud, function () {
    SoudLevel = input.soundLevel()
    if (SoudLevel > 100) {
        radio.sendNumber(Brightnes)
    }
})
let SoudLevel = 0
let Brightnes = 0
Brightnes = 1000
radio.setGroup(1)
basic.forever(function () {
	
})
