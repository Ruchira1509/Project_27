class Bob{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':0.8
    
        }
    
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        stroke('pink');
        strokeWeight(3);
        fill("turquoise");
        ellipse(0,0,this.r, this.r);
        pop();
    }
    };

  