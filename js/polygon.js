var Polygon = Class.extend({
	init: function(p){
		this.points = p.slice(0);

	},
	rotate: function(theta){
		var c = Math.cos(theta);
		var s = Math.sin(theta);

		for(var i=0;i<this.points.length;i+=2){
			var x = this.points[i];
			var y = this.points[i+1];
			this.points[i] = c*x - s*y;
			this.points[i+1] =  s*x + c*y;
		}
	},
	scale: function(c){
		for(var i=0;i<this.points.length;i++){
			this.points[i] *= c;
		}

	},
	hasPoint : function(ox,oy,x,y){
 
	}
});