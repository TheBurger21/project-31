class particle {
    constructor(x,y,r) {
      super(x,y,10,10);
      var options = {
          isStatic: true
      }
      this.body = Bodies.cirlce(x,y,this.r,options);
      this.width = width;
      this.height = height;
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
     
    }
    display(){
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        }
  };
