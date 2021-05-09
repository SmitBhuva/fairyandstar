var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star;
var invisibleL1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();
	engine = Engine.create();
	world = engine.world;

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.20;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	

	var options = {
		isStatic:true
	  }

	starBody = Bodies.circle(650,30,5,options);
	World.add(world, starBody);

	invisibleL2 = Bodies.rectangle(630,550,20,50);
    World.add(world,invisibleL2);

	
	
	//Engine.run(engine);

	invisibleL1 = createSprite(630,550,20,50);
	invisibleL1.visible = false;
}


function draw() {
  background(bgImg);

  if(fairy.isTouching(invisibleL1)){
	  fairy.velocityX = 0;
  }


   
  Engine.update(engine);
 
  /*rectMode(CENTER);
  rect(invisibleL2.position.x,invisibleL2.position.y,20,50);

  ellipseMode(RADIUS);
  ellipse(star.position.x,star.position.y,20,20);*/
  
  fairy.setCollider("rectangle",10,100,1000,1150);
  //fairy.debug = true;

  star.x=starBody.position.x
  star.y=starBody.position.y

  if(star.isTouching(invisibleL1)){
	Matter.Body.setStatic(starBody,true);
	  
  }
  
  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyCode===RIGHT_ARROW){
		fairy.velocityX=5;
	}

	/*if(fairy.isTouching(invisibleL1)){
		star.velocityY+=2
	}*/

	 

	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
		//star.velocityY = 2
	}
}
