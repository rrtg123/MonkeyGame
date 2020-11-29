
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(600,400);
monkey=createSprite(70,320,20,20);
  monkey.scale=0.2;
  monkey.addAnimation("moving",monkey_running);
  ground=createSprite(300,370,1200,10);
  ground.velocityX=-7;
  
  
  obstacleGroup=new Group();
 
}


function draw() {
background("white");
  if(ground.x<0){
    ground.x = ground.width/2;
  

  }
   
  monkey.collide(ground);
  
  if(keyDown("space")&&monkey.y>= 260){
    monkey.velocityY=-13;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8;
if(frameCount%80===0){
spawnbananas();
  }
if(frameCount%300===0){
spawnobstacles();

}   
  survivalTime();
  drawSprites();
 
}

function spawnbananas(){
  var banana=createSprite(600,Math.round(random(120,200)),10,10);
  banana.addImage(bananaImage);
  banana.velocityX=ground.velocityX;
  banana.scale=0.1;
  banana.lifetime=200
  monkey.depth=banana.depth;
  monkey.depth=monkey.depth+1;
}
function spawnobstacles(){
  var obstacle=createSprite(600,ground.y-25,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=ground.velocityX;

}
function survivalTime(){
   var survivalTime=0;

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,400,50);
}


