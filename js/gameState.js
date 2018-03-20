var Points = {
	ASTEROIDS: [
		[-4,-2,-2,-4,0,-2,2,-4,4,-2,3,0,4,2,1,4,-2,4,-4,2,-4,-2],
		[-1,-4,3,-4,5,-1,6,3,3,7,-3,8,-3,2,-5,-1,-1,-4],
		[1,-3,4,-3,3,1,5,2,1,5,-4,5,-4,1,-6,3,-8,1,-6,-3,-4,-1,-1,-6,1,-3],
		[0,-5,4,-2,-1,2,-1,-3,-4,-3,-3,-1,-6,-1,-4,-6,-2,-4,0,-5],
		[0,-2,4,-2,3,2,-1,4,-3,0,-6,3,-5,-9,-4,-6,-3,-3,-1,-1,0,-2]
		]
};


var GameState = State.extend({
	init: function(game){
		this._super(game);

		this.asteroids = [];
		for(var i =0; i<10;i++){
			var n = Math.round(Math.random()* (Points.ASTEROIDS.length - 1));
			var astr= new Asteroid(Points.ASTEROIDS[n],10,100,100);
			astr.maxX = game.canvas.ctx.width;
			astr.maxY = game.canvas.ctx.height;

			this.asteroids.push(astr);
		}


		
	},
	update: function(){
		
		for(var i =0, len = this.asteroids.length; i< len;i++){
			this.asteroids[i].update();
		}
	},
	render: function(ctx){
		ctx.clearAll();		
		for(var i =0, len = this.asteroids.length; i< len;i++){
			this.asteroids[i].draw(ctx);
		}
	}
});