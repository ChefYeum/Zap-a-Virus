game.Laser = me.Entity.extend({
    init: function(x, y) {
        const image = me.loader.getImage("laser");
        console.log(this.width);
        this._super(me.Entity, "init", [
            x - image.width/2,
            y - image.height/2,
            {
              image : image,
              width: image.width,
              height: image.height
            }
        ]);
        this.maxX = me.game.viewport.width - this.width;
        this.z = 5;
        this.body.setVelocity(0, 250);
        this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;
        this.alwaysUpdate = true;
    },

    update: function(time) {
        this.body.vel.y -= this.body.accel.y * time / 1000;
        if (this.pos.y + this.height <= 0) {
            me.game.world.removeChild(this);
        }
        this.body.update();
        me.collision.check(this);
        return true;
    },

    onCollision: function(res, other) {
        if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
            if (other.body.hp <= 0) {
                me.game.world.removeChild(this);
                game.playScreen.enemyManager.removeChild(other);
                game.data.score += 1;
            } else {
                me.game.world.removeChild(this);
                other.body.hp -= 1;
            }
            return false;
        }
    }
});

// game.Laser.width = 5;
// game.Laser.height = 28;