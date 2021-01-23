var gameState =1;


function setup() {
  createCanvas(1500 ,900);

 
    hero1 = createSprite(50, 400, 20, 20);
    hero1.visible = false;
    villain1 = createSprite(1200, 400, 20, 20);
    villain1.visible = false;
    hero1.velocityX = 6;
    hero1.velocityY = 7;

    villain1.velocityX = -6;
    villain1.velocityY = 7;

    life =100;
   
 
    
  

}

function draw() {
  background(0);
  
  createEdgeSprites();

if(gameState === 1){
  textSize(30);
  text("Press Space for the fight", 400,400);
}
  if(keyDown("space")){
    hero1.visible = true;
    villain1.visible = true;
    gameState = 2;
  }
 

  if(gameState === 2){

    villain1.bounceOff(edges);
    hero1.bounceOff(edges);
    hero1.bounce(villain1)
    life = life-5;

   if(life === 0){
     gameState = 3
   }
  }

  if(gameState === 3){
    if(keyDown("w")){
      hero1.y -= 3
    }

    if(keyDown("s")){
      hero1.y += 3
    }
    if(keyDown("a")){
      hero1.x -= 3
    }

    if(keyDown("d")){
      hero1.x += 3
    }

    if(keyDown("up")){
      villain1.y -= 3
    }

    if(keyDown("down")){
      villain1.y += 3
    }
    if(keyDown("left")){
      villain1.x -= 3
    }

    if(keyDown("right")){
      villain1.x += 3
    }


  }
  
  drawSprites();
}