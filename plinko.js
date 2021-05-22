class plinko {
    constructor(x,y,r) {
      super(x,y,10,10);
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      fill("white");
    }
  };
