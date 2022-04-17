basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || (input.soundLevel() >= 100 || false)) {
        robotbit.MotorRun(robotbit.Motors.M1A, 100)
        robotbit.GeekServo(robotbit.Servos.S1, 50)
        basic.pause(5000)
        basic.pause(5000)
    } else {
        robotbit.GeekServo(robotbit.Servos.S1, 0)
        robotbit.MotorRun(robotbit.Motors.M1A, 0)
    }
})
