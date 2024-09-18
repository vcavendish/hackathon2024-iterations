// Collision detection
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile, asteroid) {
    projectile.destroy()
    asteroid.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
// Shoot projectiles
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 2 2 . 
        `, player, 0, -100)
    music.pewPew.play()
})
// Losing condition
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player, asteroid) {
    asteroid.destroy()
    info.changeLifeBy(-1)
})
let asteroid: Sprite = null
let projectile: Sprite = null
let player: Sprite = null
// Create player
player = sprites.create(img`
    . . 5 5 5 . . 
    . 5 4 4 4 5 . 
    5 4 4 4 4 4 5 
    . . 1 1 1 . . 
    `, SpriteKind.Player)
player.setPosition(80, 110)
// Move player with buttons
controller.moveSprite(player, 100, 0)
player.setStayInScreen(true)
// Game start tutorial
game.splash("Welcome to Space Invader!")
game.splash("Use the arrow keys to move.")
game.splash("Press 'A' to shoot.")
game.splash("Destroy the asteroids before they reach the bottom.")
// Set initial conditions
info.setLife(3)
info.setScore(0)
// Win condition
game.onUpdate(function () {
    if (info.score() >= 10) {
        game.over(true)
    }
})
// Asteroids
game.onUpdateInterval(1000, function () {
    asteroid = sprites.create(img`
        . b b b . 
        b 5 5 5 b 
        b 5 5 5 b 
        . b b b . 
        `, SpriteKind.Enemy)
    asteroid.setVelocity(0, 50)
    asteroid.setPosition(Math.randomRange(0, 160), 0)
    asteroid.setFlag(SpriteFlag.AutoDestroy, true)
})
