var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	packageBody = Bodies.rectangle(width/2 , 200 , 5 ,5,{restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	boxPosition=width/2-100 
	boxY=610; 
	boxleftSprite=createSprite(boxPosition, boxY, 20,100); 
	boxleftSprite.shapeColor=color(255,0,0);
	 boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
	 World.add(world, boxLeftBody);
	 boxposition=width/2+100
	 boxY=610
	 boxrightSprite=createSprite(boxposition,boxY,20,100);
	 boxrightSprite.shapeColor=color(255,0,0);
	 boxRightBody=Bodies.rectangle(boxposition+20,boxY,20,100 , {isstatic:true}  );
     World.add(world, boxRightBody);
	 boxposition=width/2+10
	 boxY=650
	 boxdownSprite=createSprite(boxposition,boxY,200,20);
	 boxdownSprite.shapeColor=color(255,0,0);
	 boxdownBody=Bodies.rectangle(boxposition,boxY-30,200,20 , {isstatic:true}  );
     World.add(world, boxdownBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === 32) {
    Matter.Body.setStatic(packageBody,false);
  }
}



