let Zufall = 0
input.onGesture(Gesture.SixG, function () {
    Zufall = randint(0, 2)
    if (Zufall == 0) {
        basic.setLedColor(0xff0000)
        music.playMelody("- B - - - - - - ", 484)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (Zufall == 1) {
        basic.setLedColor(0x0000ff)
        music.playMelody("- - - F - - - - ", 378)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.setLedColor(0x00ff00)
        music.playMelody("- - - - - E - - ", 421)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
