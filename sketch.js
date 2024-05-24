function setup() {
  createCanvas(800, 500);
  background("pink");
}

function draw() {
  fill("purple")
stroke("lightblue");
 
  if(mouseIsPressed){
    circle(mouseX, mouseY, 20)
  }
}
