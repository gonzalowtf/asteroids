var GameState = State.extend({
	init: function(game){
		this._super(game);
		this.poly = new Polygon([-1,-1,1,1,-1,1,-1,-1]);
		this.poly.scale(50);
	},
	update: function(){
	},
	render: function(ctx){
		ctx.drawPolygon(this.poly,100,100);
	}
});