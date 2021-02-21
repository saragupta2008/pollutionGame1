var human,animal,start,startImage
var gameState
function preload(){
startImage.loadImage("start.png");
}

function steup(){
    createCanvas(800,600)
human=createSprite(200,100,20,20);
human.visible=false

animal=createSprite(300,100,40,20);
animal.visible=false

start=createSprite(120,200,20,10);
start.addImage(startImage);
}

function draw(){
    background("white");
   
    if(mousePressedOver(start)){
        gameState=PLAY
    }

    if(gameState==PLAY){
        
        human.visible=true
        animal.visible=true

    }

    drawSprites()
}