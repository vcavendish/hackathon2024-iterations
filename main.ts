/**
 * MakeCode Arcade Game Example
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    lives += -1
    info.changeLifeBy(-1)
    if (lives == 0) {
        game.over(false, effects.dissolve)
    }
})
let enemy: Sprite = null
let score = 0
let lives = 0
scene.setBackgroundColor(9)
let player = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f . . . 
    . . . . f f f f f 2 2 f f f f . 
    . . . f f f f 2 f f f 2 2 f f f 
    . . f f f 2 2 f 2 2 f f 2 f 2 2 
    . f f f f f 2 2 2 2 2 f f 2 2 2 
    f f f 2 2 f 2 2 2 2 2 2 f f f f 
    f f f f 2 2 f 2 2 2 2 f f 2 2 . 
    . . . . . f 2 f f f 2 2 . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player)
player.setStayInScreen(true)
lives = 3
info.startCountdown(60)
info.setScore(score)
info.setLife(lives)
game.onUpdateInterval(2000, function () {
    enemy = sprites.create(img`
        . . . . . 2 2 2 2 . . . . . 
        . . . 2 2 3 3 3 3 2 2 . . . 
        . 2 2 3 3 3 3 3 3 3 3 2 2 . 
        . 2 2 3 3 3 3 3 3 3 3 2 2 . 
        . 2 2 3 3 3 3 3 3 3 3 2 2 . 
        . . . 2 2 3 3 3 3 2 2 . . . 
        . . . . . 2 2 2 2 . . . . . 
        `, SpriteKind.Enemy)
    enemy.setVelocity(-50, 0)
    enemy.setPosition(160, Math.randomRange(0, 120))
    enemy.setFlag(SpriteFlag.AutoDestroy, true)
})
