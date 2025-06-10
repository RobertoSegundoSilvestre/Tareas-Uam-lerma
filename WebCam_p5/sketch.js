let capturador;
let posX, posY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capturador = createCapture(VIDEO,{flipped: true});
  capturador.size(800,400);
  capturador.hide();
  imageMode(CENTER)

  posX = width*0.5;
  posY = height*0.5;
  
}

function draw() {
  background(220);
  image(capturador, posX, posY, 450, 600)
}
