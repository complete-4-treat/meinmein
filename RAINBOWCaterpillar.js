var greyValue; 

function setup() {
createCanvas(windowWidth, windowHeight); 
background(255);
}


function draw() {
  //noFill();
  //map(whatToWatch, minVal,maxVal, destminVal, destMaxVal); 
  greyValue= map(mouseX, 0, width, 0, 255); 
  fill(greyValue, mouseY, greyValue); // 0-255 values
 circle(mouseX, mouseY, 100);
}
