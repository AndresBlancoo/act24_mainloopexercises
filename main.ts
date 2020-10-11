input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . . # . .
            . # . # .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            . # . # .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # .
            # . . . #
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            # . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    x = 0
    y = 0
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        basic.pause(500)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showNumber(counter)
        count += 1
    }
    basic.showIcon(IconNames.Surprised)
    basic.clearScreen()
})
let count = 0
let y = 0
let x = 0
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
    basic.pause(500)
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
    basic.pause(500)
    basic.showArrow(ArrowNames.South)
    basic.clearScreen()
    basic.pause(500)
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
}
basic.forever(function () {
	
})
