// Handle what happens when player overlaps with enemy
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player3, enemy) {
    game.over(false)
})
// Handle what happens when player overlaps with item
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player3, item) {
    info.changeScoreBy(1)
    item.destroy()
})
let item: Sprite = null
let enemy: Sprite = null
// Create the player sprite and set its properties
let player2 = sprites.create(img`
    . . . . . . f f f f f . . . . 
    . . . . f f f 2 2 f f f . . . 
    . . . f f f 2 2 2 2 f f f . . 
    . . f f f e e e e e e f f f . 
    . f f f e 2 2 2 2 2 2 e e f f 
    . f f e 2 f f f f f f 2 e f f 
    . f f f f f e e e e f f f f f 
    f f e f b f 4 4 4 4 f b f e f 
    f e e 4 1 f d d d d f 1 4 e e 
    . f e e d d d d d d d d e f . 
    . . f f e e 4 4 4 4 e e f f . 
    . . . f f e e e e e e f f . . 
    . . . . f f f f f f f f . . . 
    . . . . . . f f f f f . . . . 
    `, SpriteKind.Player)
player2.setFlag(SpriteFlag.StayInScreen, true)
// Set player controls
controller.moveSprite(player2)
// Set game score and start conditions
info.setScore(0)
info.startCountdown(60)
// Create enemy sprite and set properties
game.onUpdateInterval(2000, function () {
    enemy = sprites.create(img`
        . . . . . . 2 2 . . . . . . 
        . . . . . 2 2 2 3 . . . . . 
        . . . . 3 2 3 3 2 2 . . . . 
        . . . 3 2 2 3 2 2 3 3 . . . 
        . . 3 3 2 3 3 3 2 3 3 3 . . 
        . . . 3 2 2 3 3 2 3 3 . . . 
        . . . . 3 2 2 2 3 3 . . . . 
        . . . . . 3 3 3 3 . . . . . 
        . . . . . . 3 3 . . . . . . 
        `, SpriteKind.Enemy)
    enemy.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
// Create item sprite and set properties
game.onUpdateInterval(1000, function () {
    item = sprites.create(img`
        . . . . . . 3 3 . . . . . . 
        . . . . . 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 . . . 
        . . 3 3 3 3 3 3 3 3 3 3 . . 
        . . . 3 3 3 3 3 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 3 3 . . . . . 
        . . . . . . 3 3 . . . . . . 
        `, SpriteKind.Food)
    item.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
