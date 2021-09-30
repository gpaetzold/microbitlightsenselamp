let lightness = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    lightness = input.lightLevel()
    if (lightness > 10) {
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
