/**
 * Initialize the player and other variables
 */
/**
 * Description: A simple space-themed game where the player controls a spaceship to collect stars and avoid asteroids.
 */
/**
 * Title: Space Explorer
 */
// Function to spawn stars
function spawnStar () {
    star = sprites.create(img`
        . . . . . . . . . 8 . . . . . 
        . . . . . . . . 8 8 . . . . . 
        . . . . . . . 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . 
        . . . . . 8 8 8 8 8 8 8 . . . 
        . . . . . . 8 8 8 8 8 . . . . 
        . . . . . . . 8 8 8 . . . . . 
        . . . . . . . . 8 8 . . . . . 
        . . . . . . . . . 8 . . . . . 
        `, SpriteKind.Food)
    star.setVelocity(-50, 0)
    star.setPosition(160, randint(5, 115))
    star.setFlag(SpriteFlag.AutoDestroy, true)
}
// Function to spawn asteroids
function spawnAsteroid () {
    asteroid = sprites.create(img`
        . . . . . . c c c c 6 . . . . 
        . . . . c 6 7 7 7 7 7 6 . . . 
        . . . c 7 7 7 7 7 7 7 7 6 . . 
        . . c 7 7 7 7 7 7 7 7 7 7 6 6 
        . c 6 7 7 7 7 7 7 7 7 7 7 7 7 
        c 6 7 7 7 7 7 7 7 7 7 7 7 7 7 
        c 6 6 7 7 7 7 7 7 7 7 7 7 7 7 
        c c 6 6 6 6 6 6 6 6 6 6 6 6 6 
        . c c 6 6 6 6 6 6 6 6 6 6 6 . 
        . . c c 6 6 6 6 6 6 6 c c . . 
        . . . . c c c c c c c c . . . 
        `, SpriteKind.Enemy)
    asteroid.setVelocity(-50, 0)
    asteroid.setPosition(160, randint(5, 115))
    asteroid.setFlag(SpriteFlag.AutoDestroy, true)
}
// Collision event: player and star
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.powerUp.play()
})
// Collision event: player and asteroid
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    game.over(false)
})
let asteroid: Sprite = null
let star: Sprite = null
let gameOver = false
let score = 0
// Create the player sprite
let player = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
// Set player controls
controller.moveSprite(player)
player.setStayInScreen(true)
// Initialize score and provide instructions
info.setScore(0)
game.splash("Collect the stars and avoid the asteroids!")
game.onUpdateInterval(1000, function () {
    spawnAsteroid()
})
game.onUpdateInterval(1500, function () {
    spawnStar()
})
