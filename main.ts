/**
 * Set the initial state
 */
/**
 * MakeCode Arcade Game: Space Dodger
 */
// Collision with enemy mechanics - player loses
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let enemy: Sprite = null
let enemySpeed = 50
let level = 1
// Initialize the player
let player = sprites.create(img`
    . . . . . . . . . . . 
    . . . f f f f f f . . 
    . . f 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 f 
    . f 5 5 5 5 5 5 5 5 f 
    . f 5 5 5 5 5 5 5 5 f 
    . . f 5 5 5 5 5 5 f . 
    . . . f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(player)
player.setStayInScreen(true)
// Score and win condition
info.startCountdown(60)
info.score()
// Instructions for player
game.showLongText("Move the spaceship with arrow keys to avoid enemies. Survive until the timer runs out to win!", DialogLayout.Center)
game.onUpdate(function () {
    info.changeScoreBy(1)
    if (info.score() >= 1000) {
        game.over(true)
    }
})
// Create enemies
game.onUpdateInterval(1000, function () {
    enemy = sprites.create(img`
        . . . . . . . . . . . . . . 
        . . . . . 3 f f f 3 . . . . 
        . . . 3 f f f f f f f f . . 
        . . f f f f f f f f f f f . 
        . . 3 f f f f 3 f f f f f . 
        . . f f f f f f f f f f 3 . 
        . . f f f f f f f f f f f . 
        . . . 3 f f f f f f f 3 . . 
        . . . . . 3 f f f 3 . . . . 
        . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy.setVelocity(0, enemySpeed)
    enemy.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
    enemy.setFlag(SpriteFlag.AutoDestroy, true)
})
