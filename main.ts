let lightness = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    lightness = input.lightLevel()
    if (lightness > 10) {
        basic.showIcon(IconNames.Square)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.SmallSquare)
    }
})
