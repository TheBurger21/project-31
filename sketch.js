var plinko=[];
var particle=[];
var division=[];
var divisionHeight=300;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground=newGround(400,350,800,30);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
for (var k=0; k<=width; k=k+80) {
  division.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j=0; k<particle.length; j++) {
 particle[j].display();
}
for (var k=0; k<division.length; k++) {
  division[k].display();
 }
 if(frameCount%60===0){
   particle.push(new particle(random(width/2-10,width/2+10),10,10));
 }