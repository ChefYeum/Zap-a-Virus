game.HUD = game.HUD || {};

game.HUD.Container = me.Container.extend({

    init: function() {
        // call the constructor
        this._super(me.Container, 'init');

        // persistent across level change
        this.isPersistent = true;

        // make sure we use screen coordinates
        this.floating = true;

        // give a name
        this.name = "HUD";

        // add our child score object at the top left corner
        this.addChild(new game.HUD.ScoreItem(5, 5));
    }
});


/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend({
    /**
     * constructor
     */
    init: function(x, y) {

        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, 20, 20]);

        this.font = new me.BitmapFont(
            me.loader.getBinary("PressStart2P"),
            me.loader.getImage("PressStart2P"),
            0.7,
            "right",
            "bottom"
        );
        // local copy of the global score
        this.score = -1;
    },

    /**
     * update function
     */
    update : function () {
        // we don't do anything fancy here, so just
        // return true if the score has been updated
        if (this.score !== game.data.score) {
            this.score = game.data.score;
            return true;
        }
        return false;
    },

    /**
     * draw the score
     */
    draw : function (renderer) {
        // draw it baby !
        const score = `Score: ${game.data.score}`; 
        const highScore = `Highscore: ${game.data.highScore}`;
        const x = me.game.viewport.width - 50;
        const y = me.game.viewport.height - 50;
        this.font.draw (renderer, score, x, y - 50);
        this.font.draw (renderer, highScore, x, y);
    }

});