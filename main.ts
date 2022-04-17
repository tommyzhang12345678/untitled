input.onButtonPressed(Button.A, function () {
    robotbit.GeekServo(robotbit.Servos.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    robotbit.GeekServo(robotbit.Servos.S1, 90)
})
basic.forever(function () {
	
})
