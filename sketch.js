
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,height-50,1500,15);
	ground1=createSprite(width/2,50,1500,15);

	bobObject1=new Paper(200,600,80);
	bobObject2=new Paper(280,600,80);
	bobObject3=new Paper(360,600,80);
	bobObject4=new Paper(440,600,80);
	bobObject5=new Paper(520,600,80);


chain=new Rope(bobObject2.body,ground1.body,50,0);


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 chain.display();
  drawSprites();
 
}



