var homescreen, bmiscreen, tipscreen, trackscreen;
var c, b1, b2, b3, b4, bg;
function preload(){
  b1 =loadImage("bg1.jpg");
  b2 = loadImage("bg2.jpg");
  b3 = loadImage("bg3.jpg");
  b4 = loadImage("b4.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  homescreen = new HomeScreen();
  c = 1;
}

function draw() {
  if(bg)
  background(bg);
  homescreen.display();
if (c === 1){
   bg = b1;
}
if (c === 2){
  bg = b2;
}
if (c === 3){
  bg = b3;
}
if (c === 4){
  bg = b4;
}
  drawSprites();
}