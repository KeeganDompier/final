namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function camera_lv_2 () {
    Camera_lv_2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
e e e e e e e e e e e e e e e e 
`, -75, 0)
    Camera_lv_2.setPosition(750, 125)
}
function Level_1_splash () {
    game.splash("Level 1, travel into the future with the portal while avoiding monsters or moving too slowly")
    game.splash("use the arrows to move left and right, and Down arrow to stop")
}
function die_camera () {
    // If character goes off screen, then he dies
    if (Kumba.x <= scene.cameraLeft() || Kumba.x >= scene.cameraLeft() + 160) {
        game.over(false)
    }
}
function Level_2_monster () {
    Lv_2_monster = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
}
scene.onOverlapTile(SpriteKind.Player, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 a a 9 9 9 9 9 9 9 
9 9 9 9 9 7 a 5 5 5 5 5 9 9 9 9 
9 9 9 9 7 a 5 9 4 4 4 9 5 9 9 9 
9 9 9 b 7 a 5 4 b b b 4 9 9 9 9 
9 9 4 b 7 a 5 b 7 7 7 b 4 9 9 9 
9 9 4 b 7 a 5 f f a a 7 b 4 9 9 
9 9 4 b 7 a a f f 5 a 7 b 4 9 9 
9 9 9 4 b 7 7 7 b 5 a 7 b 4 9 9 
9 9 9 9 4 b b b 4 5 a 7 b 9 9 9 
9 9 9 5 9 4 4 4 9 5 a 7 9 9 9 9 
9 9 9 9 5 5 5 5 5 a 7 9 9 9 9 9 
9 9 9 9 9 9 9 a a 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, function (sprite, location) {
    Level = 2
    camera_lv_2()
    Level_2_boosters()
})
function character_start () {
    // sets sprite
    Kumba = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . . . . . . 
. 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . 
. . . 5 5 5 5 b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 5 5 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b c c c c . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . f c c c c f 5 d d d d d d d . . . . . . . . . . . . . . . . 
. . . b c c b . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Kumba.ay = 200
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    // Animates main Character to walk
    animation.runImageAnimation(
    Kumba,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . 
. . . . . . 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f d c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f d c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . . c c c c c c c c . . . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 5 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b . . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 5 5 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . . b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . c c c c b . . . . . . . . . . . . . . . . . 
d d d d d d d d 5 f c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . b c c b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 5 5 b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 b b . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . 
. . . . . . 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f d c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f d c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . . c c c c c c c c . . . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 5 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b . . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 5 5 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . . b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . c c c c b . . . . . . . . . . . . . . . . . 
d d d d d d d d 5 f c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . b c c b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . c b b b b 5 5 . . . . . . . . . . . . . . . . 
. . . . . . . . c c b b b b 5 5 . . . . . . . . . . . . . . . . 
. . . . . . . . 5 5 c . b b 5 5 . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . 5 . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . 
. . . . . . 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f d c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f d c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . . c c c c c c c c . . . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 5 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b . . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 5 5 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . . b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . c c c c b . . . . . . . . . . . . . . . . . 
d d d d d d d d 5 f c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . b c c b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 5 5 b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 b b . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . 
. . . . . . 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f d c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . f d f d c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . c c c c c c c c c c . . . . . . . . . . . . . . . . 
. . . . . . . c c c c c c c c . . . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 5 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b . . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 b b 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b 5 5 5 5 b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . b b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . . b b c c b b b . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . c c c c b . . . . . . . . . . . . . . . . . 
d d d d d d d d 5 f c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . b c c b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . b b b b b 5 5 . . . . . . . . . . . . . . . . 
. . . . . . . . b b b b b c 5 5 . . . . . . . . . . . . . . . . 
. . . . . . . . 5 5 b . c c 5 5 . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . 5 . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    Kumba.vx = -75
})
scene.onOverlapTile(SpriteKind.Player, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f a a f f f f f f f 
f f f f f 7 a 5 5 5 5 5 f f f f 
f f f f 7 a 5 f 4 4 4 f 5 f f f 
f f f b 7 a 5 4 b b b 4 f f f f 
f f 4 b 7 a 5 b 7 7 7 b 4 f f f 
f f 4 b 7 a 5 f f a a 7 b 4 f f 
f f 4 b 7 a a f f 5 a 7 b 4 f f 
f f f 4 b 7 7 7 b 5 a 7 b 4 f f 
f f f f 4 b b b 4 5 a 7 b f f f 
f f f 5 f 4 4 4 f 5 a 7 f f f f 
f f f f 5 5 5 5 5 a 7 f f f f f 
f f f f f f f a a f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, function (sprite, location) {
    Level = 3
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Kumba.vx = 0
})
function Level_2 () {
    Todd_and_Jared_1.destroy()
    Tom_and_Jared_2.destroy()
    Tom_and_Jared_3.destroy()
    scene.setTile(14, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
b 1 b b b b b b b b b b b b 1 b 
b b 1 b b b b b b b b b b 1 b b 
b b b 1 b b b b b b b b 1 b b b 
b b b b 1 b b b b b b 1 b b b b 
b b b b b 1 b b b b 1 b b b b b 
b b b b b b 1 b b 1 b b b b b b 
b b b b b b b 1 1 b b b b b b b 
b b b b b b b 1 1 b b b b b b b 
b b b b b b 1 b b 1 b b b b b b 
b b b b b 1 b b b b 1 b b b b b 
b b b b 1 b b b b b b 1 b b b b 
b b b 1 b b b b b b b b 1 b b b 
b b 1 b b b b b b b b b b 1 b b 
b 1 b b b b b b b b b b b b 1 b 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
    scene.setTile(6, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(4, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(9, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(7, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(3, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
b b 1 1 1 1 b b b b 1 1 1 1 b b 
b b b b b b 1 1 1 1 b b b b b b 
b b 1 1 1 1 b b b b 1 1 1 1 b b 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
    scene.setTile(5, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f a a f f f f f f f 
f f f f f 7 a 5 5 5 5 5 f f f f 
f f f f 7 a 5 f 4 4 4 f 5 f f f 
f f f b 7 a 5 4 b b b 4 f f f f 
f f 4 b 7 a 5 b 7 7 7 b 4 f f f 
f f 4 b 7 a 5 f f a a 7 b 4 f f 
f f 4 b 7 a a f f 5 a 7 b 4 f f 
f f f 4 b 7 7 7 b 5 a 7 b 4 f f 
f f f f 4 b b b 4 5 a 7 b f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
b b 1 1 1 1 b b b b 1 1 1 1 b b 
b b b b b b 1 1 1 1 b b b b b b 
b b 1 1 1 1 b b b b 1 1 1 1 b b 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
    scene.setTile(11, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.cameraFollowSprite(Camera_lv_2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Kumba.ay += -100
})
function Level_1 () {
    // Sets tile map
    scene.setTileMap(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 
5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 7 7 7 7 9 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 7 9 7 7 7 7 7 9 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 9 7 7 7 7 7 7 7 7 9 7 7 7 7 7 e 
4 7 4 7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 b e e 
6 7 6 7 7 7 7 7 7 7 6 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7 7 7 7 7 7 7 7 7 9 f e e e 
e e e e e e e e 7 7 6 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 e e e 7 7 7 e 7 7 7 e e e e 
e e e e e e e e e e e e 7 7 7 7 6 7 7 e e e e e e e e e e e e e 7 7 7 e e e e e 7 e e e 7 e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`)
    scene.setTile(14, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e f e e e e e e e 
e f e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e f e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e f e e e e e e e e e e 
e e e e e e e e e e e e e e f e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e f e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
`, true)
    scene.setTile(6, img`
9 d d d d d d d d d d d d d d 9 
9 d 9 d 9 d 9 d d 9 d 9 d 9 d 9 
9 d 9 d 9 d 9 d d 9 d 9 d 9 d 9 
9 d d d d d d d d d d d d d d 9 
9 d d d d d d d d d d d d d d 9 
9 d 9 d 9 d 9 d d 9 d 9 d 9 d 9 
9 d 9 d 9 d 9 d d 9 d 9 d 9 d 9 
9 d d d d d d d d d d d d d d 9 
9 d d d d d d d d d d d d d d 9 
9 d 9 d 9 d 9 d d 9 d 9 d 9 d 9 
9 d 9 d 9 d 9 d d 9 d 9 d 9 d 9 
9 d d d d d d d d d d d d d d 9 
9 d d d d d d d d d d d d d d 9 
9 d 9 d 9 d 9 d d 9 d 9 d 9 d 9 
9 d 9 d 9 d 9 d d 9 d 9 d 9 d 9 
9 d d d d d d d d d d d d d d 9 
`, false)
    scene.setTile(4, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 
9 9 9 9 9 9 d d d d 9 9 9 9 9 9 
9 9 9 9 9 d d d d d d 9 9 9 9 9 
9 9 9 9 d d d d d d d d 9 9 9 9 
9 9 9 d 9 d 9 d d 9 d 9 d 9 9 9 
9 9 d d 9 d 9 d d 9 d 9 d d 9 9 
9 d d d d d d d d d d d d d d 9 
`, false)
    scene.setTile(9, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 1 1 1 1 9 9 9 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 9 9 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 
9 9 9 1 1 1 1 1 1 1 1 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
    scene.setTile(7, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
    scene.setTile(15, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 a a 9 9 9 9 9 9 9 
9 9 9 9 9 7 a 5 5 5 5 5 9 9 9 9 
9 9 9 9 7 a 5 9 4 4 4 9 5 9 9 9 
9 9 9 b 7 a 5 4 b b b 4 9 9 9 9 
9 9 4 b 7 a 5 b 7 7 7 b 4 9 9 9 
9 9 4 b 7 a 5 f f a a 7 b 4 9 9 
9 9 4 b 7 a a f f 5 a 7 b 4 9 9 
9 9 9 4 b 7 7 7 b 5 a 7 b 4 9 9 
9 9 9 9 4 b b b 4 5 a 7 b 9 9 9 
9 9 9 5 9 4 4 4 9 5 a 7 9 9 9 9 
9 9 9 9 5 5 5 5 5 a 7 9 9 9 9 9 
9 9 9 9 9 9 9 a a 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
    scene.setTile(3, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
    scene.setTile(5, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
    scene.setTile(11, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
    Level = 1
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
function Level_4 () {
	
}
function Level_1_enemies () {
    Todd_and_Jared_1 = sprites.create(img`
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`, SpriteKind.Enemy)
    animation.runImageAnimation(
    Todd_and_Jared_1,
    [img`
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    Todd_and_Jared_1.setPosition(280, 104)
    Tom_and_Jared_2 = sprites.create(img`
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`, SpriteKind.Enemy)
    animation.runImageAnimation(
    Tom_and_Jared_2,
    [img`
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    Tom_and_Jared_2.setPosition(550, 105)
    Tom_and_Jared_3 = sprites.create(img`
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`, SpriteKind.Enemy)
    animation.runImageAnimation(
    Tom_and_Jared_3,
    [img`
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e f 1 e f 1 e . . e f 1 e f 1 e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
e e e e e e e . . e e e e e e e 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. e e e e e . . . . e e e e e . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    Tom_and_Jared_3.setPosition(600, 72)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    // Animates main Character to walk
    animation.runImageAnimation(
    Kumba,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . . . . . . 
. 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . 
. . . 5 5 5 5 b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 5 5 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b c c c c . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . f c c c c f 5 d d d d d d d . . . . . . . . . . . . . . . . 
. . . b c c b . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . . . . . . 
. 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . 
. . . 5 5 5 5 b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 5 5 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b c c c c . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . f c c c c f 5 d d d d d d d . . . . . . . . . . . . . . . . 
. . . b c c b . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 b b b b c . . . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 b b b b c c . . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 b b . c 5 5 . . . . . . . . . . . . . . . . . . . . . . . 
. 5 . . . . 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . . . . . . 
. 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . 
. . . 5 5 5 5 b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 5 5 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b c c c c . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . f c c c c f 5 d d d d d d d . . . . . . . . . . . . . . . . 
. . . b c c b . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 c c c c c c 5 5 . . . . . . . . . . . . . . . . . . . . . 
. 5 c c c c c c c c 5 . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c d f d f . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. c c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . 
. . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . 
. . . 5 5 5 5 b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 b b 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b 5 5 5 5 b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b b . . . . . . . . . . . . . . . . . . . . . . . 
. b b b c c b b . . . . . . . . . . . . . . . . . . . . . . . . 
. . b c c c c . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . f c c c c f 5 d d d d d d d . . . . . . . . . . . . . . . . 
. . . b c c b . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 b b b b b . . . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 c b b b b b . . . . . . . . . . . . . . . . . . . . . . . 
. 5 5 c c . b 5 5 . . . . . . . . . . . . . . . . . . . . . . . 
. 5 . . . . 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    Kumba.vx = 75
})
function jump () {
    if (Kumba.isHittingTile(CollisionDirection.Bottom)) {
        // Makes Character jump
        Kumba.vy += -100
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Kumba.vx = 0
})
function Call_levels () {
    if (Level == 2) {
        Level_2()
    }
    if (Level == 3) {
        Level_3()
    }
    if (Level == 4) {
        Level_4()
    }
}
function Level_2_boosters () {
    Trampoline = sprites.create(img`
. . . . . . . 7 7 . . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Food)
    Trampoline.setPosition(280, 104)
}
function camera_lv_1 () {
    // Once the game starts, the camera will go at a
    // consistent pace
    Camera_lv_1 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
e e e e e e e e e e e e e e e e 
`, 75, 0)
    Camera_lv_1.setPosition(80, 125)
}
function start () {
    controller.moveSprite(Kumba, 75, 0)
}
function Level_3 () {
	
}
let Camera_lv_1: Sprite = null
let Trampoline: Sprite = null
let Tom_and_Jared_3: Sprite = null
let Tom_and_Jared_2: Sprite = null
let Todd_and_Jared_1: Sprite = null
let Level = 0
let Lv_2_monster: Sprite = null
let Kumba: Sprite = null
let Camera_lv_2: Sprite = null
character_start()
Level_1_splash()
Level_1_enemies()
Level_1()
camera_lv_1()
game.onUpdate(function () {
    die_camera()
    scene.cameraFollowSprite(Camera_lv_1)
    Call_levels()
})
