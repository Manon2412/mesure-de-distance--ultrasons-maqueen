let vitesse = randint(50, 100)
let u = randint(1, 4) == maqueen.Ultrasonic(PingUnit.Centimeters)
let tournante = randint(1, 4)
basic.showNumber(tournante)
basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) > 20) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitesse)
    }
})
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitesse)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
        if (tournante == 1) {
            maqueen.servoRun(maqueen.Servos.S1, 180)
        } else if (tournante == 2) {
            maqueen.servoRun(maqueen.Servos.S2, 180)
        } else if (tournante == 3) {
            basic.showIcon(IconNames.SmallSquare)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, vitesse)
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else {
            maqueen.motorStop(maqueen.Motors.M1)
        }
    }
})
