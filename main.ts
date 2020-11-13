input.onButtonPressed(Button.A, function () {
    x = 0
    y = 0
    basic.clearScreen()
    basic.pause(1000)
    for (let index = 0; index < 5; index++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
            basic.clearScreen()
        }
        y += 1
    }
    x = randint(0, 4)
    y = randint(0, 4)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Chessboard)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    basic.clearScreen()
    led.plot(x, y)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if ((x == 1 || (x == 4 || x == 0)) && (y == 3 || (y == 4 || y == 1))) {
        box = randint(1, 27)
        basic.showNumber(box)
        basic.showString("continue?")
        game.addScore(game.score() + box)
    } else {
        basic.showIcon(IconNames.No)
        music.playMelody("C C C C - - - - ", 140)
        basic.pause(5000)
        strike += 1
        if (strike == 5) {
            game.gameOver()
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("G B A G C5 B A B ", 120)
    music.playMelody("F E F D C C C C ", 120)
    game.gameOver()
})
let box = 0
let x = 0
let y = 0
let strike = 0
let computer = randint(1, 7) * 9 / 2
game.setScore(0)
strike = 0
let counter = 3
y = 0
music.playMelody("E D G F B A C5 B ", 211)
for (let index = 0; index <= 3; index++) {
    basic.showNumber(counter)
    counter += -1
}
