function setup() {
  createCanvas(windowWidth, windowHeight);
}
let titulo1="Descubre las frases positivas"
let titulo2="Presiona las teclas Q W E R T Y U I O P"
let frase1=" "
let frase2=" "
let frase3=" "
let frase4=" "
let frase5=" "
let frase6=" "
let frase7=" "
let frase8=" "
let frase9=" "
let frase10=" "
//Fondo de la frase
let cuadro1= false;
let cuadro2= false;
let cuadro3= false;
let cuadro4= false;
let cuadro5= false;
let cuadro6= false;
let cuadro7= false;
let cuadro8= false;
let cuadro9= false;
let cuadro10= false;
//
let estado = 0;
//
function draw() {
  background(0)
  textSize (35)
  noStroke()
  fill (255)
  textAlign (CENTER,CENTER)
  text (titulo1, 775, 50)
//
 textSize (15)
  text (titulo2, 765, 100)
 //1 
if (cuadro1) {
    fill(255,255,0);
    rect(1100, 150, 300, 80);
}
textSize (25)
fill(0);
text(frase1, 1250, 190);
//2
if (cuadro2) {
  fill(76, 201, 240);
  rect(100, 550, 300, 100);
}
fill(0);
text(frase2, 250, 600);
//3
if (cuadro3) {
    fill(58, 90, 64);
    rect(175, 130, 250, 30);
}
textSize (15)
fill(173, 181, 189);
text(frase3, 300, 145);
//4
if (cuadro4) {
    fill(102, 7, 8);
    rect(720, 600, 300, 30);
}

fill(173, 181, 189);
text(frase4, 870, 615);
//5
if (cuadro5) {
    fill(255, 198, 255);
    rect(1200, 500, 300, 100);
}
textSize (25)
fill(0);
text(frase5, 1345, 550);
//6
if (cuadro6) {
    fill(202, 255, 191);
    rect(600, 300, 300, 80);
}
textSize (25)
fill(0);
text(frase6, 750, 345);
//7
if (cuadro7) {
    fill(115, 75, 94);
    rect(1065, 350, 300, 30);
}
textSize (15)
fill(173, 181, 189);
text(frase7, 1215, 365);
//8
if (cuadro8) {
    fill(128, 91, 16);
    rect(300, 450, 300, 35);
}
fill(173, 181, 189);
text(frase8, 450, 470);
//9
if (cuadro9) {
    fill(2, 62, 125);
    rect(550, 175, 300, 30);
}
fill(173, 181, 189);
text(frase9, 695, 190);
//10
if (cuadro10) {
    fill(248, 173, 157);
    rect(75, 275, 300, 100);
}
textSize (25)
fill(0); 
text(frase10,225, 325);
}
function keyPressed() {
  if(key ==='q'){
  frase1="Sigue jugando"
  cuadro1= true;
  }
  if(key ==='w'){
  frase2="Lo estás logrando"
  cuadro2= true;
  }
  if(key ==='e'){
  frase3="Tanto esfuerzo…para que"
  cuadro3= true;
  }
  if(key ==='r'){
  frase4="Tú no estás hecho para esto"
  cuadro4= true;
  }
  if(key ==='t'){
  frase5="Confía en tu trabajo"
  cuadro5= true;
  }
  if(key ==='y'){
  frase6="Se nota tu esfuerzo"
  cuadro6= true;
  }
  if(key ==='u'){
  frase7="Tu esfuerzo no se nota"
  cuadro7= true;
  }
  if(key ==='i'){
  frase8="Tú no eres para esto"
  cuadro8= true;
  }
  if(key ==='o'){
  frase9="Eres de los que sólo están ahí"
  cuadro9= true;
  }
  if(key ==='p'){
  frase10="Sigue firme."
  cuadro10= true;
  }
if (key ==='a'){
    estado = 0;

    frase1 = " "
    cuadro1 = false;

    frase2 = " "
    cuadro2 = false;

    frase3 = " "
    cuadro3 = false;

    frase4 = " "
    cuadro4 = false;

    frase5 = " "
    cuadro5 = false;

    frase6 = " "
    cuadro6 = false;

    frase7 = " "
    cuadro7 = false;

    frase8 = " "
    cuadro8 = false;

    frase9 = " "
    cuadro9 = false;

    frase10 = " "
    cuadro10 = false;
}


  
}
