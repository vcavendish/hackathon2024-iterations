/**
 * MakeCode Arcade Game: Space Explorer
 * 
 * An educational game demonstrating basic game mechanics.
 */
// Game over condition
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
let star: Sprite = null
// Initialize variables
let player = sprites.create(img`
    . . . . . . . . 5 5 5 5 . . . . . . . . 
    . . . . . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . . . . . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . . . . . . . 5 5 5 5 . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player)
scene.cameraFollowSprite(player)
// Create a score variable
info.setScore(0)
// Add a tutorial
game.splash("Welcome to Space Explorer!")
game.splash("Use the arrow keys to move.")
game.splash("Collect stars to score points.")
// Win condition
game.onUpdate(function () {
    if (info.score() >= 10) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(1000, function () {
    star = sprites.create(img`
        . . 2 2 b 2 2 . . 
        . 2 b 4 4 4 b 2 . 
        2 b 4 4 4 4 4 b 2 
        2 4 4 4 4 4 4 4 2 
        2 4 4 4 4 4 4 4 2 
        2 b 4 4 4 4 4 b 2 
        . 2 b 4 4 4 b 2 . 
        . . 2 2 b 2 2 . . 
        `, SpriteKind.Food)
    star.setPosition(randint(10, 150), randint(10, 110))
})
