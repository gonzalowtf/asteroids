var Points = {
	ASTEROIDS: [
		[-4,-2,-2,-4,0,-2,2,-4,4,-2,3,0,4,2,1,4,-2,4,-4,2,-4,-2],
		[-1,-4,3,-4,5,-1,6,3,3,7,-3,8,-3,2,-5,-1,-1,-4],
		[1,-3,4,-3,3,1,5,2,1,5,-4,5,-4,1,-6,3,-8,1,-6,-3,-4,-1,-1,-6,1,-3],
		[0,-5,4,-2,-1,2,-1,-3,-4,-3,-3,-1,-6,-1,-4,-6,-2,-4,0,-5],
		[0,-2,4,-2,3,2,-1,4,-3,0,-6,3,-5,-9,-4,-6,-3,-3,-1,-1,0,-2]
		],
		SHIP: [6,0,-3,-3,-2,0,-3,3,6,0],
		FLAMES : [-2,0,-3,-1,-5,0,-3,1,-2,0]
};
var AsteroidSize =8;


var GameState = State.extend({
	init: function(game){
		this._super(game);
		this.canvasWidth = game.canvas.ctx.width;
		this.canvasHeight = game.canvas.ctx.height;

		this.ship = new Ship(Points.SHIP, Points.FLAMES,2,this.canvasWidth/2,this.canvasHeight/2);
		this.ship.maxX = this.canvasWidth;
		this.ship.maxY = this.canvasHeight;

		this.generateLvl();
		
	},
	generateLvl: function(){
		var num = 3;

		this.bullet = [];
		this.asteroids = [];
		for(var i =0; i<num;i++){
			var n = Math.round(Math.random()* (Points.ASTEROIDS.length - 1));
			var astr= new Asteroid(Points.ASTEROIDS[n],AsteroidSize,100,100);
			astr.maxX = this.canvasWidth;
			astr.maxY = this.canvasHeight;

			this.asteroids.push(astr);
		}
	},
	handleInputs: function(input){
		if(input.isDown("right")){
			this.ship.rotate(0.06);
		}
		if(input.isDown("left")){
			this.ship.rotate(-0.06);
		}
		this.ship.drawFlames = false;
		if(input.isDown("up")){
			this.ship.addVel();
					}
	},
	update: function(){
		
		for(var i =0, len = this.asteroids.length; i< len;i++){
			this.asteroids[i].update();
		}
		this.ship.update();
	},
	render: function(ctx){
		ctx.clearAll();		
		for(var i =0, len = this.asteroids.length; i< len;i++){
			this.asteroids[i].draw(ctx);
		}
		this.ship.draw(ctx);
	}
});