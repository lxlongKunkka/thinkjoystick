basic.showIcon(IconNames.Happy)
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P3, 4, NeoPixelMode.RGB)
strip.setBrightness(5)
strip.showRainbow()

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
        strip.showBarGraph(0, 255)
        strip.show()
        basic.showString("B")
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.X)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
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