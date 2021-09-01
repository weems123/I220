function setup() {
  createCanvas(600, 600);
  var purple ="#b103fc";
  var noseMouth = "3";

  background(26, 27, 28);

  noStroke();
  fill(purple);
  ellipse(450, 90, 50);

  stroke(3, 202, 252);
  strokeWeight(noseMouth);
  
  fill(200, 50, 50);
  rect(50, 75, 30, 30);

  strokeWeight(noseMouth);
  line(150, 350, 375, 400);
  line(200, 250, 250, 250);
  line(200, 250, 250, 190);

  strokeWeight(10);
  point(450, 90);



}