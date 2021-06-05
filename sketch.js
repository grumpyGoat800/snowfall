function preload(){
  backgroundImg = loadImage("snow2.jpg")
  characterImg = loadImage("whitehat1.jpeg")
  snowImg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  character(characterImg);
  snowImg(snowImg);

  drawSprites();

function keyPressed(){
  if keyPressed(up_arrow){
   
    characterImg x = x+20  
  }
if keyPressed(down_arrow)

  characterImg y = y+20
}

  
}
