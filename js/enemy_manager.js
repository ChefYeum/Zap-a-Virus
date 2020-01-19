game.EnemyManager = me.Container.extend({
    init : function () {
        this._super(me.Container, "init", [0, 100,
            this.COLS * 200 - 100,
            this.ROWS * 200 - 100
        ]);
        this.COLS = 9;
        this.ROWS = 4;
        this.vel = 0;
        me.timer.setInterval(this.spawnEnemy.bind(this), 1500);
    },

    update : function (time) {

        if (this.children.length === 0 && this.createdEnemies) {
            game.playScreen.reset();
        }
        
        this._super(me.Container, "update", [time]);
        // this.updateChildBounds();
    },

    spawnEnemy : function () {
        // set x randomly but at least 15px off the canvas edges
        var x = Math.random()*(me.game.viewport.width-60)+40;
        // set y to start on the line where objects are spawned
        var y = 25;
        this.addChild(me.pool.pull("enemy", x, y));
        // game.playScreen.checkIfLoss(this.childBounds.bottom);
        // this.updateChildBounds();
    },

    spawnWormChildren: function(x, y) {
        const isRight = x >= (me.game.viewport.width/2)
        const newX = x + (100 * (isRight ? -1 : 1));
        console.log({ isRight, x, newX });
        this.addChild(
            me.pool.pull(
                "enemy",
                this.pos.x + newX,
                this.pos.y + 100)
        );
    },



  });
