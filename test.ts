basic.showIcon(IconNames.Happy)
radio.setGroup(1)
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
})