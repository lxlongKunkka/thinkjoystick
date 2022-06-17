basic.showIcon(IconNames.Happy)
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P3, 4, NeoPixelMode.RGB)
strip.setBrightness(5)
strip.showRainbow()
let tempnow = 0
ThinkJoyStick.init(60)
let index = 0
ThinkJoyStick.showString(
    0,
    0,
    "Hello!",
    1
)
let min = input.temperature()
let max = input.temperature()
basic.forever(function () {
    tempnow = input.temperature()
    if (tempnow > max) {
        max = tempnow
    }
    if (tempnow < min) {
        min = tempnow
    }
    ThinkJoyStick.showNumber(
        5,
        0,
        tempnow,
        1
    )
    ThinkJoyStick.pixel(index, 32 - Math.map(tempnow, 15, 35, 0, 20), 1)
    ThinkJoyStick.draw()
    index += 1
    if (index == 64) {
        index = 0
        ThinkJoyStick.clear()
        ThinkJoyStick.showString(
            0,
            0,
            "Temp",
            1
        )
    }
    if (input.buttonIsPressed(Button.A)) {
        ThinkJoyStick.showString(
            0,
            3,
            "Min",
            1
        )
        ThinkJoyStick.showNumber(
            5,
            3,
            min,
            1
        )
    }
    if (input.buttonIsPressed(Button.B)) {
        ThinkJoyStick.showString(
            0,
            3,
            "Min",
            1
        )
        ThinkJoyStick.showNumber(
            5,
            3,
            max,
            1
        )
    }
})


basic.forever(function () {
    ThinkJoyStick.ListenKeyPad()
    if (ThinkJoyStick.ReadKeyPad(KEY.UP)) {
        radio.sendString("forward")
        basic.showArrow(ArrowNames.North)
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.DOWN)) {
        radio.sendString("back")
        basic.showArrow(ArrowNames.South)
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.LEFT)) {
        radio.sendString("left")
        basic.showArrow(ArrowNames.West)
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.RIGHT)) {
        radio.sendString("right")
        basic.showArrow(ArrowNames.East)
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.NONE)) {
        radio.sendString("stop")
        basic.showIcon(IconNames.SmallHeart)
    }
    if (ThinkJoyStick.ReadKeyPad(KEY.A))
    {
        strip.rotate()
        strip.show()
        basic.showString("A")
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.B))
    {
        strip.shift()
        strip.show()
        basic.showString("B")
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.X)) {
        strip.showRainbow()
        strip.show()
        basic.showString("X")
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.Y))
    {
        strip.showRainbow()
        strip.clear()
        strip.show()
        basic.showString("Y")
    }
})