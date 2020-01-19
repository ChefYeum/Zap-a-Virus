game.GameOverScreen = me.ScreenObject.extend({

    init: function() {
      this.savedData = null;
      this.handler = null;
    },
  
    onResetEvent: function() {
  
    me.game.world.addChild(new me.ImageLayer(0, 0, {
        image:"net",
        anchorpoint:(1, 1)
        }), 0);

           
    this.HUD = new game.HUD.Container();
    me.game.world.addChild(this.HUD);
      
    let wording = new (me.Renderable.extend({

        init : function() {
            this._super(me.Renderable, 'init', [320, 480, me.game.viewport.width, me.game.viewport.height]);
            this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
            this.title = "GAME OVER";
            
            this.animate = new me.Tween(this.pos).to({y: 240}, 2000);
            this.animate.start();
    
    
        },
    
        draw : function(renderer) {
            // this.font.setFont("yellow");
            this.font.draw(renderer, this.title, this.pos.x + 500, this.pos.y + 140);
                
        },
        update : function(dt) {
            return true;
        },
    
    
        
    
    }));
    
    me.game.world.addChild(wording, 2);

    me.input.bindKey(me.input.KEY.ENTER, "enter", true);
    me.input.bindKey(me.input.KEY.SPACE, "enter", false)
    me.input.bindPointer(me.input.mouse.LEFT, me.input.KEY.ENTER);
  
    this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
        if (action === "enter") {
            me.state.change(me.state.MENU);
        }
    });
     
    },
  
    onDestroyEvent: function() {
      // unregister the event
      me.event.unsubscribe(this.handler);
      me.input.unbindKey(me.input.KEY.ENTER);
      me.input.unbindKey(me.input.KEY.SPACE);
      me.input.unbindPointer(me.input.mouse.LEFT);
      me.game.world.removeChild(this.ground);
      this.font = null;
      me.audio.stop("theme");
    }
});