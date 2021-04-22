
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;
var chain1;
var chain2;
var chain3;
var chain4;
var chain5;


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400, 550, 50);
	bob2 = new Bob(500, 550, 50);
	bob3 = new Bob(600, 550, 50);
	bob4 = new Bob(300, 550, 50);
	bob5 = new Bob(200, 550, 50);

	roof = new Roof(400, 100, 500 ,20);
	chain1 = new Chain(bob1.body, roof.body, 0, 0);
	chain2 = new Chain(bob2.body, roof.body, 100, 0);
	chain3 = new Chain(bob3.body, roof.body, 200, 0);
	chain4 = new Chain(bob4.body, roof.body, -100, 0);
	chain5 = new Chain(bob5.body, roof.body, -200, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}



function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob3.body, bob3.body.position, {x:-470, y:-480});
	}
}



