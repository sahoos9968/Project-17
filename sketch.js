
var monkey , monkeyRunning;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground;
var survivalTime = 0;
var score = 0; 

function preload(){
  
  
  monkeyRunning =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  background(200);
  
  
  ground = createSprite(200,390,600,10);
  ground.shapeColor = "brown";
  ground.x = ground.width/2;
  
  monkey = createSprite(30,370,20,20);
  monkey.addAnimation("monkey", monkeyRunning);
  monkey.scale = 0.1;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(200);
  
  survivalTime = Math.ceil(frameCount/frameRate()); 
  textSize(25);
  fill("blue")
  text("score: "+ score, 300,50);
  textSize(20);
  fill("red")
  text("survivalTime: "+ survivalTime, 30,50);
  if (gameState === PLAY) {
    
    ground.velocityX = -3;
    
    if (ground.x < 100){
      ground.x = ground.width/2;
    }
    
    
    if(keyDown("space")&& monkey.y > 300){
      monkey.velocityY = - 10;
    }
    
    spawnBananas();
    spawnObstacles();
    
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
  }
  
  if (gameState === END) {
    
  }
  
  
  drawSprites();
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,270,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.y = Math.round(random(250,300));
    banana.lifetime = 100;
    bananaGroup.add(banana);
    
  }
    

}

function spawnObstacles() {
  if (frameCount % 100 === 0) {
    obstacle = createSprite(400,370,20,20);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
  
    
}




