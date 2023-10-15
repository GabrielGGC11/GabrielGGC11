function setup() {
    createCanvas(400, 400);
  background(250);
  }
  function draw() {
    
  
    stroke("blue")
    fill("red");
    
    //console.log(mouseIsPressed)
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 35, 43);
  }
  }