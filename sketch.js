
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,box3,box2,box1,ground;

function setup() {
	createCanvas(1300, 650);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,40);
	ground = new Ground(width/2,620,width,20);
   
	box1 = new Dustbin(1200,510,20,200);
	box2 = new Dustbin(1000,510,20,200);
	box3  =new Dustbin(1100,600,219,20);
	imgbox =new dust(1100,510,235,230);
	Engine.run(engine);
  
}

function draw() {

  background("skyblue");
  rectMode(CENTER);
 
  paper.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
 imgbox.display();
}

function keyPressed(){
	
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}
