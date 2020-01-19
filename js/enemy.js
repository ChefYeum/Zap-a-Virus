game.Enemy = me.Entity.extend({
    init: function(x, y) {
        this._super(me.Entity, "init", [x, y, {
            image: "ships",
            width: 100,
            height: 100
        }]);this.z = 5;
        this.minX = this.width;
        this.maxX = me.game.viewport.width - this.width;
        // Hacky thing to see if it's a worm's child
        this.isWorm = false;
        if (y !== 25) {
            this.isWorm = true;
        } else {
            // if true it's a worm
            if (this.chooseShipImage()) {
                this.isWorm = true;
            };
        }
        if (this.isWorm) {
            this.renderable.addAnimation("idle", [1], 1);
            this.renderable.setCurrentAnimation("idle");

            me.timer.setTimeout(this.spawnWormChildren.bind(this), 2000, true);
        }
        this.body.setVelocity(0, 1);
        // this.body.collisionType = me.collision.types.ENEMY_OBJECT;
        this.body.hp = 3;
        console.log(this.worm);
    },

    update: function(time) {
    
        if (this.pos.y + this.height >= me.game.viewport.height) {
            me.game.world.removeChild(this);
            return false;
        }
        this.body.update();
        me.collision.check(this);
        return true;
    },

    // Return: isWorm
    chooseShipImage: function () {
        var frame = Math.floor(Math.random() * 3);
        this.renderable.addAnimation("idle", [frame], 1);
        this.renderable.setCurrentAnimation("idle");
        // console.log(frame);
        // Worm is frame 1
        return frame === 1;
    },

    spawnWormChildren: function() {
        if (!this.body || this.body.hp === 0)
            return false;
        console.log("Spawning new warm");
        game.playScreen.enemyManager.spawnWormChildren(this.pos.x, this.pos.y);
    },

    onCollision: function(res, other) {
        if (other.body.collisionType === me.collision.types.PLAYER_OBJECT) {
            me.state.change(me.state.GAME_OVER);
            return false;
        }
    }
    
});
