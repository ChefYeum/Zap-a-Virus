game.Enemy = me.Entity.extend({
    init: function(x, y) {
        this._super(me.Entity, "init", [x, y, {
            image: "ships",
            width: 100,
            height: 100
        }]);this.z = 5;
        this.chooseShipImage();
        this.body.setVelocity(0, 1);
        this.body.collisionType = me.collision.types.ENEMY_OBJECT;
        this.body.hp = 3;
    },

    update: function(time) {
    
        if (this.pos.y + this.height >= me.game.viewport.height) {
            me.game.world.removeChild(this);
        }
        this.body.update();
        me.collision.check(this);
        return true;
    },

    chooseShipImage: function () {
        var frame = Math.floor(Math.random() * 3);
        this.renderable.addAnimation("idle", [frame], 1);
        this.renderable.setCurrentAnimation("idle");
    },

// onCollision: function(res, other) {
    //     if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
    //         if (other.body.hp <= 0) {
    //             me.game.world.removeChild(this);
    //             game.playScreen.enemyManager.removeChild(other);
    //             game.data.score += 1;
    //         } else {
    //             me.game.world.removeChild(this);
    //             other.body.hp -= 1;
    //         }
    //         return false;
    //     }
    // }
    
});
