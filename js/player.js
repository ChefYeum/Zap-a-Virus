game.Player = me.Entity.extend({
    init: function() {
        const image = me.loader.getImage("player");
        this._super(me.Entity, "init", [
            me.game.viewport.width / 2 - image.width / 2,
            me.game.viewport.height - image.height - 20,
            {
              image : image,
              width: image.width,
              height: image.height
            }
        ]);
        // this.shoot();
        this.velx = 450;
        this.minX = this.width;
        this.maxX = me.game.viewport.width - this.width;
        // this.body = new me.Body(this);
        this.body.collisionType = me.collision.types.PLAYER_OBJECT;

        me.timer.setInterval(this.shoot.bind(this), 200, true);
    },

    shoot: function() {
        if (this.alive) {
            me.game.world.addChild(
                me.pool.pull("laser", this.pos.x - game.Laser.width + 30, this.pos.y - game.Laser.height + 30)
            );
        }

    },

    update: function(time) {

        // this._super(me.Sprite, "update", [time]);
        if (me.input.isKeyPressed("left")) {
            this.pos.x -= this.velx * time / 1000;
        }

        if (me.input.isKeyPressed("right")) {
            this.pos.x += this.velx * time / 1000;
        }

        this.pos.x = me.Math.clamp(this.pos.x, 0, this.maxX);

        return true;
    }
    
});