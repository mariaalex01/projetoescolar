function setup() {
  createCanvas(1000,900);
  background("pink");
}

function draw() {
  fill("purple")
stroke("lightblue");
 
  if(mouseIsPressed){
    circle(mouseX, mouseY, 20)
  }
}
