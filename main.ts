input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        basic.showNumber(counter)
        counter += -1
    }
    while (!(input.buttonIsPressed(Button.B))) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
    	
    } else {
        for (let index = 0; index < 5; index++) {
            basic.showString("continue?")
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    game.gameOver()
    music.playMelody("G B A G C5 B A B ", 120)
    music.playMelody("C C C C - - - - ", 120)
    music.playMelody("F E F D C C C C ", 120)
})
let counter = 0
let ysprite = 6
game.setScore(0)
counter = 3
let y = 0
music.playMelody("E D G F B A C5 B ", 120)
