input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
    for (let index = 0; index < 2; index++) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 99)
    }
    basic.pause(5000)
    for (let index = 0; index < 6; index++) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 99)
    }
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    for (let index = 0; index < 2; index++) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 31)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(100)
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(100)
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(100)
})
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
moveMotorZIP.show()
for (let index = 0; index < 1; index++) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
}
for (let index = 0; index < 1; index++) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 100)
}
for (let index = 0; index < 1; index++) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 100)
}
for (let index = 0; index < 1; index++) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 100)
}
basic.forever(function () {
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(100)
})
