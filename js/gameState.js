var Points = {
	ASTEROIDS: [
		[-4,-2,-2,-4,0,-2,2,-4,4,-2,3,0,4,2,1,4,-2,4,-4,2,-4,-2]
		]
};


var GameState = State.extend({
	init: function(game){
		this._super(game);
		this.astr= new Asteroid(Points.ASTEROIDS[0],10,100,100);
	},
	update: function(){
		this.astr.rotate(0.01);

	},
	render: function(ctx){
		ctx.clearAll();
		this.astr.draw(ctx);
	}
});