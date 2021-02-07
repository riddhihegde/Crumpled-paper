
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumpled;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	crumpled=new paper(50,200,20);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	
	
	
	
  
}


function draw() {
  
  background(230);
  
  Engine.update(engine);
  imageMode(CENTER) ;

  crumpled.display();
  groundObject.display();
  dustbinObj.display();
  
 drawSprites();


}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpled.body,crumpled.body.position,{x:15 ,y:-15});
	}
}