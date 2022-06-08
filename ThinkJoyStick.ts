// Add your code here

let SR_CLK = DigitalPin.P12;
let INSR0_DATA = DigitalPin.P8;        //Data
let INSR_LATCH = DigitalPin.P16;

enum KEY {
    LEFT = 0,
    UP,
    DOWN,
    RIGHT,
    A,
    B,
    X,
    Y
};

//% weight=20 color=#3333ff icon="\uf11b"
namespace ThinkJoyStick {
    let KEYSCAN = 0;
    //% blockID==KeyPad
    //% block="ListenKeyPad"
    //% weight=90
    export function ListenKeyPad(): void {
        pins.setPull(INSR0_DATA, PinPullMode.PullUp)
        pins.digitalWritePin(INSR_LATCH, 0);
        control.waitMicros(2000);
        pins.digitalWritePin(INSR_LATCH, 1);
        KEYSCAN = 0;
        let i = 0;
        for (i = 0; i < 8; i++) {
            KEYSCAN = KEYSCAN << 1;
            let tmp = pins.digitalReadPin(INSR0_DATA);
            KEYSCAN |= tmp;
            pins.digitalWritePin(SR_CLK, 0);
            control.waitMicros(1000);
            pins.digitalWritePin(SR_CLK, 1);
        }
        //basic.showNumber(KEYSCAN);
    }

    //% blockID==KeyPad
    //% block="Key %pin |Press"
    //% weight=90
    export function ReadKeyPad(pin: KEY): boolean {
        if ((KEYSCAN >> pin) & 0x01) {
            return false;
        }
        else {
            return true;
        }
    }
}
