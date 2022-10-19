//let allows to assign a variable
  let canvasWidth = 400;
  let canvasHeight = 400;
  let x = 0;
  let fillColor = "black"

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  //frameRate(20);
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(125);

  //pushing a new piece of "graph paper" ontop of stack
  push()
  translate(200,200)
  rotate(45)
  rect(0,0,40,40)
  pop()
  //takes "graph paper away"

  //fill(map (mouseX,0,canvasWidth,0,255));
  //for (let n=0 ; n<6 ; n++){
    //rect(40*n,mouseY,34,40)}
  
  //let n = 0;
  //while (n < 4) {
    //rect(40*n,100,34,40);
    //n++;}

  //fill(fillColor);
    //rect(200,200,40,40)

  //ellipse(canvasWidth/2, canvasHeight/2,4,4)
  //circle(100,100,10)
//if (x > 100 || x < 200) {x++}

//if (mouseIsPressed){}
  //rect(x,x,40,40)
  //rect(x*2,340,40,40);

}








function mouseClicked() {
  //fill(random(225))
  if (fillColor == "black") {
    fillColor = "white"
  } else {
    fillColor = "black"
  }
}
