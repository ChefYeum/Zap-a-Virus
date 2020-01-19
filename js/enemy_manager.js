game.EnemyManager = me.Container.extend({
    init : function () {
        this._super(me.Container, "init", [0, 72,
            this.COLS * 144 - 72,
            this.ROWS * 144 - 72
        ]);
        this.COLS = 9;
        this.ROWS = 4;
        // this.vel = 16;
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

    // onActivateEvent : function () {
    //     var _this = this;
    //     this.timer = me.timer.setInterval(function () {
            
    //     var bounds = _this.childBounds;
    //     // _this.pos.y += 15;
    //     // if (_this.vel > 0) {
    //     //     _this.vel += 10;
    //     // } else {
    //     //     _this.vel -= 10;
    //     // }
    //     game.playScreen.checkIfLoss(bounds.bottom + 20);

    //     }, 500);
    // },
    
    // onDeactivateEvent : function () {
    //     me.timer.clearInterval(this.timer);
    // },

    // removeChildNow : function (child) {
    //     this._super(me.Container, "removeChildNow", [child]);
    //     this.updateChildBounds();
    // },

    spawnEnemy : function () {
        // set x randomly but at least 15px off the canvas edges
        var x = Math.random()*(me.game.viewport.width-30)+15;
        console.log("x is " +x);
        // set y to start on the line where objects are spawned
        var y = 25;
        // console.log("height is " +);
        this.addChild(me.pool.pull("enemy", x, y));
        // game.playScreen.checkIfLoss(this.childBounds.bottom);
        // this.updateChildBounds();
    }



  });
