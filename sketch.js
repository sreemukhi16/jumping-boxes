var canvas;
var music;
var square
var surface1
var surface2
var surface3
var surface4

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);
    square= createSprite(400,300,30,30)
   surface1 = createSprite(40,590,150,20)
   surface2 = createSprite(250,590,150,20)
   surface3 = createSprite(500,590,150,20) 
   surface4 = createSprite(750,590,150,20)

  
  square.velocityX = 2
  square.velocityY = 2
 

    //create 4 different surfaces
surface1.shapeColor = "red"
surface2.shapeColor = "blue"
surface3.shapeColor = "orange"
surface4.shapeColor = "yellow"
square.shapeColor = "white"



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));


    //create edgeSprite
createEdgeSprites();
square.bounceOff(surface1)
square.bounceOff(surface2)
square.bounceOff(surface3)
square.bounceOff(surface4)

keyPressed()   
drawSprites()





}

function keyPressed(){

    //add condition to check if box touching surface and make it box
    if(surface4.isTouching(square)&& square.bounceOff(surface4)){
        square.changeColor ("yellow") 
    
        
}

}
