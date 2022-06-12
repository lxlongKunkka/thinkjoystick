radio.setGroup(1)
basic.forever(function () {
    ThinkJoyStick.ListenKeyPad()
    if (ThinkJoyStick.ReadKeyPad(KEY.UP)) {

        basic.showArrow(ArrowNames.North)
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.DOWN)) {

        basic.showArrow(ArrowNames.South)
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.LEFT)) {

        basic.showArrow(ArrowNames.West)
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.RIGHT)) {

        basic.showArrow(ArrowNames.East)
    }
    else if (ThinkJoyStick.ReadKeyPad(KEY.NONE)) {
        basic.showIcon(IconNames.Heart)
    }
})