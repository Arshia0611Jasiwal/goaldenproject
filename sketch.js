



var mon,mon_fly;
var ground, groundImage;
var cloud,cloudImage,cloudGroup;
var girl,girlImage, girlJump;
var invisibleG;
var obtrash, obtrashImage,obtrash1,obtrash2,obtrash3,obtrash4,obtrash5;
 var bin ,binImage;
 var score=0;

function preload(){
    mon_fly=
    loadAnimation("images/mons1.png","images/mons2.png","images/mons3.png","images/mons4.png")
    cloudImage=loadImage("images/thecloud1.png");
girlImage=loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png","images/girl6.png","images/girl7.png","images/girl8.png")
    groundImage=loadImage("images/ground.png")
  girlJump=loadAnimation("images/girl12.png","images/girl13.png","images/girl14.png")
  obtrashImage=loadImage("images/obtrash.png");
  obtrash1=loadImage("images/bannans.png");
  obtrash2=loadImage("images/chip packet.png");
  obtrash3=loadImage("images/coins.png");
  obtrash4=loadImage("images/glass.png");
  //obtrash5=loadImage("images/paper.png");
  binImage=loadImage("images/bin4.png");

  
}



function setup(){
    createCanvas(1200,600)
    

    mon=createSprite(50,250,20,50);
    mon.addAnimation("flying",mon_fly);
    mon.scale=0.5;

    ground=createSprite(600,525,2400,800)
    ground.addImage(groundImage);
    ground.shapeColor="#814D25"
    ground.velocityX=-3
    ground.scale=3
    
   invisibleG=createSprite(600,535,2400,100)
   invisibleG.visible=false;

    girl=createSprite(200,390,20,50);
    girl.addAnimation("running",girlImage);
    girl.addAnimation("jumping", girlJump)
     girl.scale=0.5

     bin=createSprite(1100,50,50,50);
   
     bin.addImage(binImage)
     bin.scale=0.5

   cloudGroup=createGroup()
   obstacleGroup=createGroup()
    
    
}

function draw(){
background("#B7EDEF");

textSize(20)
fill ("black")
strokeWeight(3)      


 
   if(ground.x<0){
       ground.x=ground.width/2
   }
 
   if(keyDown("space")){
       girl.velocityY=-10
       girl.changeAnimation("jumping",girlJump);
   }

   girl.velocityY=girl.velocityY+0.8

   girl.collide(invisibleG)

if(obstacleGroup.isTouching(girl)){
    score=score+2
}
  spawnObstacles()

   spawnClouds()
    drawSprites()

    text("score :"+score,1000,130);
}

function spawnClouds(){
if(frameCount% 250===0){
   
     cloud=createSprite(1200,50,50,50)
     cloud.shapeColor="white"
     cloud.y=Math.round(random(50,150));
     cloud.addImage(cloudImage);
     cloud.velocityX=-2;
     cloud.scale=0.4

     mon.depth=cloud.depth+1;
     bin.depth=cloud.depth+1;

     cloud.lifetime=600;
    
     cloudGroup.add(cloud)
}
}


function spawnObstacles(){
    if(frameCount % 300===0){


        obtrash= createSprite(1200,435,50,50);
        obtrash.velocityX=-10
      var rand=Math.round(random(1,6))
      switch(rand){
          case 1: obtrash.addImage(obtrashImage);
                  break;

         case 2: obtrash.addImage(obtrash1);
                break;

        case 3: obtrash.addImage(obtrash2);
               break;
       
        case 4: obtrash.addImage(obtrash3);
               break;

        case 5: obtrash.addImage(obtrash4)
                break;

        //case 6:obtrash.addImage(obtrash5)

            //  break;

        default: break;
      }



        
        obtrash.lifetime=1200;
        obtrash.scale=0.35
        obstacleGroup.add(obtrash);
    }
}