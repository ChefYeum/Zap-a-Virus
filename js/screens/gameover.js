game.GameOverScreen = me.ScreenObject.extend({

    onResetEvent: function() {
        
        // Update high score
        game.data.highScore = Math.max(game.data.highScore, game.data.score);

        me.game.world.addChild(new me.ImageLayer(0, 0, {
          image:"net",
          anchorpoint:(1, 1)
        }), 0);
    
       let wording = new (me.Renderable.extend({
    
           init : function() {
               this._super(me.Renderable, 'init', [320, 480, me.game.viewport.width, me.game.viewport.height]);
               this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
               this.title = "GAME OVER";
               this.start = "Press Enter To Start";
    
              
              this.animate = new me.Tween(this.pos).to({y: 240}, 2000);
              this.animate.start();
    
    
           },
    
           draw : function(renderer) {
               // this.font.setFont("yellow");
               this.font.draw(renderer, this.title, this.pos.x + 500, this.pos.y + 140);
               this.font.draw(renderer, this.start, this.pos.x + 400, this.pos.y + 240);
                   
           },
           update : function(dt) {
               return true;
           },
    
    
          
    
       }));
    
        me.game.world.addChild(wording, 2);
        
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
                // reset score
                game.data.score = 0;
                
                // play something on tap / enter
                // this will unlock audio on mobile devices
                me.state.change(me.state.PLAY);
            }
        });
        
        
      
    },
    
    /**
    *  action to perform when leaving this screen (state change)
    */
    onDestroyEvent: function() {
       me.input.unbindKey(me.input.KEY.ENTER);
        me.event.unsubscribe(this.handler);
    }
    });