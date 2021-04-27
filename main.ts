function camera_lv_2 () {
    Camera_lv_4 = sprites.createProjectileFromSide(img`
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
        `, -150, 0)
    Camera_lv_4.setPosition(750, 125)
}
function Level_1_splash () {
    game.splash("Level 1, travel into the future with the portal while avoiding monsters or moving too slowly")
    game.splash("use the arrows to move left and right, and space to jump")
    game.splash("Join FBLA")
    game.splash("Join FBLA")
    game.splash("Join FBLA")
    game.splash("F-Is for future")
    game.splash("B-Is for business")
    game.splash("L-Is for Leaders")
    game.splash("A-Is for America")
    game.splash("Learn how each level works as you progress through the game")
}
function Level_4_monsters () {
    list = [img`
        ..........1...........1..........
        .........111.........111.........
        ........11111.......11111........
        .......1111111.....1111111.......
        ......111111111...111111111......
        .....11111111111.11111111111.....
        ....1111111111111111111111111....
        ...111111111111111111111111111...
        ..11111111111111111111111111111..
        .1ccccccccccccccccccccccccccccc1.
        .1ccccccccccccccccccccccccccccc1.
        .1cc11111ccccccccccccccc11111cc1.
        .1cc11111ccccccccccccccc11111cc1.
        .1cc11f11ccccccccccccccc11f11cc1.
        .1cc11111ccccccccccccccc11111cc1.
        .1cc11111ccccccfffcccccc11111cc1.
        1ccccccccccccccf1fcccccccccccccc1
        1ccccccccccccccfffcccccccccccccc1
        .1ccccccccccccccccccccccccccccc1.
        .1cccfcccccccccccccccccccccfccc1.
        .1ccccfcccccccccccccccccccfcccc1.
        .1cccccfffffffffffffffffffccccc1.
        .1ccccccccccccccccccccccccccccc1.
        .1ccccccccccccccccccccccccccccc1.
        ..11111111111111111111111111111..
        ...111111111111111111111111111...
        ....1111111111111111111111111....
        .....11111111111.11111111111.....
        ......111111111...111111111......
        .......1111111.....1111111.......
        ........11111.......11111........
        .........111.........111.........
        ..........1...........1..........
        `, img`
        ..........c...........c..........
        .........ccc.........ccc.........
        ........ccccc.......ccccc........
        .......ccccccc.....ccccccc.......
        ......ccccccccc...ccccccccc......
        .....ccccccccccc.ccccccccccc.....
        ....ccccccccccccccccccccccccc....
        ...ccccccccccccccccccccccccccc...
        ..ccccccccccccccccccccccccccccc..
        .c11111111111111111111111111111c.
        .c11111111111111111111111111111c.
        .c11ccccc111111111111111ccccc11c.
        .c11ccccc111111111111111ccccc11c.
        .c11ccfcc111111111111111ccfcc11c.
        .c11ccccc111111111111111ccccc11c.
        .c11ccccc111111fff111111ccccc11c.
        c11111111111111fcf11111111111111c
        c11111111111111fff11111111111111c
        .c11111111111111111111111111111c.
        .c111f111111111111111111111f111c.
        .c1111f1111111111111111111f1111c.
        .c11111fffffffffffffffffff11111c.
        .c11111111111111111111111111111c.
        .c11111111111111111111111111111c.
        ..ccccccccccccccccccccccccccccc..
        ...ccccccccccccccccccccccccccc...
        ....ccccccccccccccccccccccccc....
        .....ccccccccccc.ccccccccccc.....
        ......ccccccccc...ccccccccc......
        .......ccccccc.....ccccccc.......
        ........ccccc.......ccccc........
        .........ccc.........ccc.........
        ..........c...........c..........
        `]
    Lv_2_monster = sprites.create(list[randint(0, 1)], SpriteKind.Enemy)
    Lv_2_monster.setPosition(Kumba.x, Kumba.y - 40)
    Lv_2_monster_bottom = sprites.create(list[randint(0, 1)], SpriteKind.Enemy)
    Lv_2_monster_bottom.setPosition(Kumba.x, Kumba.y + 50)
}
function die_camera () {
    // If character goes off screen, then he dies
    if (Kumba.x <= scene.cameraLeft() || Kumba.x >= scene.cameraLeft() + 160) {
        game.over(false)
    }
}
scene.onOverlapTile(SpriteKind.Player, img`
    f f f f f f f f f f f f f f f f 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    f f f f f f f a a f f f f f f f 
    1 1 1 1 1 7 a 5 5 5 5 5 1 1 1 1 
    f f f f 7 a 5 f 4 4 4 f 5 f f f 
    1 1 1 b 7 a 5 4 b b b 4 1 1 1 1 
    f f 4 b 7 a 5 b 7 7 7 b 4 f f f 
    1 1 4 b 7 a 5 f f a a 7 b 4 1 1 
    f f 4 b 7 a a f f 5 a 7 b 4 f f 
    1 1 1 4 b 7 7 7 b 5 a 7 b 4 1 1 
    f f f f 4 b b b 4 5 a 7 b f f f 
    1 1 1 5 1 4 4 4 1 5 a 7 1 1 1 1 
    f f f f 5 5 5 5 5 a 7 f f f f f 
    1 1 1 1 1 1 1 a a 1 1 1 1 1 1 1 
    f f f f f f f f f f f f f f f f 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, function (sprite, location) {
    Level = 4
    Camera_lv_5()
})
function Camera_lv_5 () {
    Camera_lv_4 = sprites.createProjectileFromSide(img`
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
    Camera_lv_4.setPosition(750, 125)
}
function character_start () {
    // sets sprite
    Kumba = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..55555555......................
        .55cccccc55.....................
        .5cccccccc5.....................
        .cccccccccc.....................
        .cccccccfdf.....................
        .ccccccdfdf.....................
        .ccccccdfdf.....................
        .cccccccccc.....................
        .cccccccccc.....................
        ..cccccccc......................
        ...5555b........................
        ..b5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5555bb.......................
        .bbbccbbb.......................
        .bbbccbbb.......................
        .bbbccbb........................
        ..bcccc.5.......................
        ..fccccf5ddddddd................
        ...bccb.5.......................
        ...bbbb.........................
        ...bbbb.........................
        ...bbbb.........................
        ...bbb555.......................
        ...bb55555......................
        `, SpriteKind.Player)
    Kumba.ay = 200
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
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
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    // Animates main Character to walk
    animation.runImageAnimation(
    Kumba,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .......55555555.................
        ......55cccccc55................
        ......5cccccccc5................
        ......cccccccccc................
        ......fdfccccccc................
        ......fdfdcccccc................
        ......fdfdcccccc................
        ......cccccccccc................
        ......cccccccccc................
        .......cccccccc.................
        .........b5555..................
        ........bb5bb5b.................
        ........bb5bb5bb................
        ........bb5bb5bb................
        ........bb5bb5bb................
        ........bb5555bb................
        ........bbbccbbb................
        ........bbbccbbb................
        .........bbccbbb................
        ........5.ccccb.................
        dddddddd5fccccf.................
        ........5.bccb..................
        ..........bbbb..................
        ..........bbbb..................
        ..........bbbb..................
        ........555bbb..................
        .......55555bb..................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .......55555555.................
        ......55cccccc55................
        ......5cccccccc5................
        ......cccccccccc................
        ......fdfccccccc................
        ......fdfdcccccc................
        ......fdfdcccccc................
        ......cccccccccc................
        ......cccccccccc................
        .......cccccccc.................
        .........b5555..................
        ........bb5bb5b.................
        ........bb5bb5bb................
        ........bb5bb5bb................
        ........bb5bb5bb................
        ........bb5555bb................
        ........bbbccbbb................
        ........bbbccbbb................
        .........bbccbbb................
        ........5.ccccb.................
        dddddddd5fccccf.................
        ........5.bccb..................
        ..........bbbb..................
        .........cbbbb55................
        ........ccbbbb55................
        ........55c.bb55................
        .......5555....5................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .......55555555.................
        ......55cccccc55................
        ......5cccccccc5................
        ......cccccccccc................
        ......fdfccccccc................
        ......fdfdcccccc................
        ......fdfdcccccc................
        ......cccccccccc................
        ......cccccccccc................
        .......cccccccc.................
        .........b5555..................
        ........bb5bb5b.................
        ........bb5bb5bb................
        ........bb5bb5bb................
        ........bb5bb5bb................
        ........bb5555bb................
        ........bbbccbbb................
        ........bbbccbbb................
        .........bbccbbb................
        ........5.ccccb.................
        dddddddd5fccccf.................
        ........5.bccb..................
        ..........bbbb..................
        ..........bbbb..................
        ..........bbbb..................
        ........555bbb..................
        .......55555bb..................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .......55555555.................
        ......55cccccc55................
        ......5cccccccc5................
        ......cccccccccc................
        ......fdfccccccc................
        ......fdfdcccccc................
        ......fdfdcccccc................
        ......cccccccccc................
        ......cccccccccc................
        .......cccccccc.................
        .........b5555..................
        ........bb5bb5b.................
        ........bb5bb5bb................
        ........bb5bb5bb................
        ........bb5bb5bb................
        ........bb5555bb................
        ........bbbccbbb................
        ........bbbccbbb................
        .........bbccbbb................
        ........5.ccccb.................
        dddddddd5fccccf.................
        ........5.bccb..................
        ..........bbbb..................
        .........bbbbb55................
        ........bbbbbc55................
        ........55b.cc55................
        .......5555....5................
        `],
    100,
    true
    )
    Kumba.vx = -75
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Kumba.vx = 0
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
        f f f 5 f 4 4 4 f 5 a 7 f f f f 
        f f f f 5 5 5 5 5 a 7 f f f f f 
        f f f f f f f a a f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
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
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, false)
    scene.cameraFollowSprite(Camera_lv_4)
    controller.moveSprite(Kumba, 150, 0)
}
function Level_1 () {
    // Sets tile map
    scene.setTileMap(img`
        77797777977777777777777777777777777777777779777777
        79777777777779777777977797777777777777979777779777
        7777977777977777977777777777777977977777777977777e
        474777797747777777777777779777777777333333377777ee
        6765777777677777477777777333337773773333333339feee
        eeeeeeee77677777677777e3333333e77777eee333e333eeee
        eeeeeeeeeeee7777677eeeeeeeeeeeee777eeeee3eee3eeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
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
    Level = 1
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    // Animates main Character to walk
    animation.runImageAnimation(
    Kumba,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..55555555......................
        .55cccccc55.....................
        .5cccccccc5.....................
        .cccccccccc.....................
        .cccccccfdf.....................
        .ccccccdfdf.....................
        .ccccccdfdf.....................
        .cccccccccc.....................
        .cccccccccc.....................
        ..cccccccc......................
        ...5555b........................
        ..b5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5555bb.......................
        .bbbccbbb.......................
        .bbbccbbb.......................
        .bbbccbb........................
        ..bcccc.5.......................
        ..fccccf5ddddddd................
        ...bccb.5.......................
        ...bbbb.........................
        ...bbbb.........................
        ...bbbb.........................
        ...bbb555.......................
        ...bb55555......................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..55555555......................
        .55cccccc55.....................
        .5cccccccc5.....................
        .cccccccccc.....................
        .cccccccfdf.....................
        .ccccccdfdf.....................
        .ccccccdfdf.....................
        .cccccccccc.....................
        .cccccccccc.....................
        ..cccccccc......................
        ...5555b........................
        ..b5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5555bb.......................
        .bbbccbbb.......................
        .bbbccbbb.......................
        .bbbccbb........................
        ..bcccc.5.......................
        ..fccccf5ddddddd................
        ...bccb.5.......................
        ...bbbb.........................
        .55bbbbc........................
        .55bbbbcc.......................
        .55bb.c55.......................
        .5....5555......................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..55555555......................
        .55cccccc55.....................
        .5cccccccc5.....................
        .cccccccccc.....................
        .cccccccfdf.....................
        .ccccccdfdf.....................
        .ccccccdfdf.....................
        .cccccccccc.....................
        .cccccccccc.....................
        ..cccccccc......................
        ...5555b........................
        ..b5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5555bb.......................
        .bbbccbbb.......................
        .bbbccbbb.......................
        .bbbccbb........................
        ..bcccc.5.......................
        ..fccccf5ddddddd................
        ...bccb.5.......................
        ...bbbb.........................
        ...bbbb.........................
        ...bbbb.........................
        ...bbb555.......................
        ...bb55555......................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..55555555......................
        .55cccccc55.....................
        .5cccccccc5.....................
        .cccccccccc.....................
        .cccccccfdf.....................
        .ccccccdfdf.....................
        .ccccccdfdf.....................
        .cccccccccc.....................
        .cccccccccc.....................
        ..cccccccc......................
        ...5555b........................
        ..b5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5bb5bb.......................
        .bb5555bb.......................
        .bbbccbbb.......................
        .bbbccbbb.......................
        .bbbccbb........................
        ..bcccc.5.......................
        ..fccccf5ddddddd................
        ...bccb.5.......................
        ...bbbb.........................
        .55bbbbb........................
        .55cbbbbb.......................
        .55cc.b55.......................
        .5....5555......................
        `],
    100,
    true
    )
    Kumba.vx = 75
})
function Camera_lv_3 () {
    camera_lv_3 = sprites.createProjectileFromSide(img`
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
    camera_lv_3.setPosition(80, 125)
}
function Level_4 () {
    scene.cameraFollowSprite(Camera_lv_4)
    scene.setTile(14, img`
        f 1 1 1 f 1 1 f f 1 1 f 1 1 1 f 
        f f f f f f f f f f f f f f f f 
        1 f f 1 f 1 f f f f 1 f 1 f f 1 
        f f f f f f f f f f f f f f f f 
        1 1 f 1 f f 1 f f 1 f f 1 f 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 f f 1 f f f f 1 f f 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 f f 1 1 f f 1 1 f f 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 f 1 f f 1 f f 1 f f 1 f 1 1 
        f f f f f f f f f f f f f f f f 
        1 f 1 f f f 1 f f 1 f f f 1 f 1 
        f f f f f f f f f f f f f f f f 
        f f 1 1 f 1 f f f f 1 f 1 1 f f 
        f f f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(3, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(9, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(6, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(7, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(5, img`
        1 f f f f f f f f f f f f f f f 
        1 f 8 8 8 8 8 2 2 2 2 2 2 2 2 f 
        1 f 8 8 8 8 8 1 1 1 1 1 1 1 1 f 
        1 f 8 8 8 8 8 2 2 2 2 2 2 2 2 f 
        1 f 8 8 8 8 8 1 1 1 1 1 1 1 1 f 
        1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        1 f f f f f f f f f f f f f f f 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(4, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(15, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    Level_4_monsters()
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
scene.onOverlapTile(SpriteKind.Player, img`
    1 f f f f f f f f f f f f f f f 
    1 f 8 8 8 8 8 2 2 2 2 2 2 2 2 f 
    1 f 8 8 8 8 8 1 1 1 1 1 1 1 1 f 
    1 f 8 8 8 8 8 2 2 2 2 2 2 2 2 f 
    1 f 8 8 8 8 8 1 1 1 1 1 1 1 1 f 
    1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    1 f f f f f f f f f f f f f f f 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, function (sprite, location) {
    game.over(true)
})
function jump () {
    if (Kumba.isHittingTile(CollisionDirection.Bottom)) {
        // Makes Character jump
        Kumba.vy += -100
    }
}
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
function camera_lv_1 () {
    // Once the game starts, the camera will go at a consistent pace
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
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
    Camera_lv_3()
})
function Level_3 () {
    scene.cameraFollowSprite(camera_lv_3)
    scene.setTile(14, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(3, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(9, img`
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(6, img`
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(7, img`
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(5, img`
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(4, img`
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    scene.setTile(15, img`
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        f f f f f f f a a f f f f f f f 
        1 1 1 1 1 7 a 5 5 5 5 5 1 1 1 1 
        f f f f 7 a 5 f 4 4 4 f 5 f f f 
        1 1 1 b 7 a 5 4 b b b 4 1 1 1 1 
        f f 4 b 7 a 5 b 7 7 7 b 4 f f f 
        1 1 4 b 7 a 5 f f a a 7 b 4 1 1 
        f f 4 b 7 a a f f 5 a 7 b 4 f f 
        1 1 1 4 b 7 7 7 b 5 a 7 b 4 1 1 
        f f f f 4 b b b 4 5 a 7 b f f f 
        1 1 1 5 1 4 4 4 1 5 a 7 1 1 1 1 
        f f f f 5 5 5 5 5 a 7 f f f f f 
        1 1 1 1 1 1 1 a a 1 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    controller.moveSprite(Kumba, 75, 0)
}
let Camera_lv_1: Sprite = null
let camera_lv_3: Sprite = null
let Tom_and_Jared_3: Sprite = null
let Tom_and_Jared_2: Sprite = null
let Todd_and_Jared_1: Sprite = null
let Level = 0
let Lv_2_monster_bottom: Sprite = null
let Kumba: Sprite = null
let Lv_2_monster: Sprite = null
let list: Image[] = []
let Camera_lv_4: Sprite = null
character_start()
Level_1_enemies()
Level_1()
camera_lv_1()
game.onUpdate(function () {
    die_camera()
    scene.cameraFollowSprite(Camera_lv_1)
    Call_levels()
})
