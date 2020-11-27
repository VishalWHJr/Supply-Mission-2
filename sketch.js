var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground

	
	 //creating a box with 3 rectangles
	 var options={
		 isStatic:true,
		 restitution:0.5
	 }
	 rect1=Bodies.rectangle(width/2-100 , 610 , 20 , 100 ,options);
	 rect1.height=100;
	 rect1.width=20;
	 World.add(world,rect1);

	 rect2=Bodies.rectangle(width/2, 650 , 200 , 20 , options);
	 rect2.width=200;
	 rect2.height=20;
	 World.add(world,rect2);

	 rect3=Bodies.rectangle(width/2+100 , 610 , 20 , 100 , options);
	 rect3.height=100;
	 rect3.width=20;
	 World.add(world,rect3);

	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
	 console.log(rect1.width,rect1.height);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  keyPressed(); 
  drawSprites();
	
	rectMode(CENTER);
  fill("red");
  stroke("red");
  strokeWeight(0);

  rect(rect1.position.x, rect1.position.y,rect1.width,rect1.height);
  rect(rect2.position.x,rect2.position.y,rect2.width,rect2.height);
  rect(rect3.position.x,rect3.position.y,rect3.width,rect3.height);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, isStatic=false)
		
    
  }
}



