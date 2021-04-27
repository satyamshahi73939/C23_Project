var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxWall1, boxWall2, boxWall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 650);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    boxWall1=createSprite(width/2, height-50, 200, 20);
	boxWall1.shapeColor=color("red");
	boxWall2=createSprite(310, height-110, 20, 100);
	boxWall2.shapeColor=color("red");
	boxWall3=createSprite(490, height-110, 20, 100);
	boxWall3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
	boxWall1 = Bodies.rectangle(width/2, 585, 200, 20 , {isStatic:true} );
 	World.add(world, boxWall1);
	boxWall2 = Bodies.rectangle(310, 540, 20, 100 , {isStatic:true} );
 	World.add(world, boxWall2);
	boxWall3 = Bodies.rectangle(490, 540, 20, 100 , {isStatic:true} );
 	World.add(world, boxWall3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		packageSprite.x= packageBody.position.x;
		packageSprite.y= packageBody.position.y;
		var packageBody_options = {isStatic:true}
	  }
}



