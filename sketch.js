var astro, astroImg;
var bgn, bgnImg;
var alien, alienImg;
var star1 ,star1Img ;
var star2, star2Img ;
var starsGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
    bgnImg = loadImage("bgnew.png");
    astroImg = loadImage("astro.png");
    star1Img = loadImage("star1.png");
    star2Img = loadImage("star2.png");
    alienImg = loadImage("alien.png");
}

function setup() {
 createCanvas(950,400);

 astro = createSprite(70,230);
 astro.addImage(astroImg);
 astro.scale = 0.01;

 starsGroup = createGroup();


 

 
 




}

function draw() {
  background("black")

  if(gameState === PLAY){
    
    
    
    }

    else if(gameState === END){
      
    }
  spawnStars();
 drawSprites();
}

function spawnStars() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
    star1 = createSprite(900,350);
    star1.addImage(star1Img);
    star1.velocityX = -4;
    star1.scale = 0.010;
  
    star1.lifetime = 134;
    starsGroup.add(star1)
   
   }
   
   if(frameCount % 80 === 0){
    star2 = createSprite(950,Math.round(random(0,325)));
    star2.addImage(star2Img);
    star2.velocityX = -4;
    star2.scale = 0.020;
    starsGroup.add(star2)
   }
   
  }