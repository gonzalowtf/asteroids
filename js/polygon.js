var Polygon = Class.extend({
	init: function(p){
		this.points = p.slice(0);

	},
	rotate: function(){

	},
	scale: function(c){
		for(var i=0;i<this.points.length;i++){
			this.points[i] *= c;
		}

	},
	hasPoint : function(ox,oy,x,y){

	}
});