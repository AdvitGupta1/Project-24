
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine,ball,side1,side2,side3,ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball= new Paper(200,150,20);
	side1=new Dustbin(600,650,200,20);
	side2=new Dustbin(490,620,20,100);
	side3=new Dustbin(710,620,20,100);
	ground=new Ground(400,670,1000,20);
}

function draw() {

  Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  
ball.display();
side1.display();
side2.display();
side3.display();
ground.display();
}


function keyPressed(){
if(keyCode===DOWN_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85});
}
}