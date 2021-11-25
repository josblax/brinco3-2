namespace SpriteKind {
    export const Win = SpriteKind.create()
    export const Fire = SpriteKind.create()
}
game.onUpdate(function () {
    let hero: Sprite = null
    hero.sayText("x" + ("" + hero.x) + "y" + ("" + hero.y))
    if (hero.vx > 0) {
        animation.setAction(null, 0)
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
