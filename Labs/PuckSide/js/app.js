//variable for where to start the circle
var xSpot = 0;

//needed to start the code for the program (must come before draw)
function setup() {
    createCanvas(400,300);

}

//starting function of draw that runs 60 times per second
function draw() {
//drawing the circle at mouse postions with radius of 50
    ellipse(mouseX, mouseY, 50);

//color of the circle(blue)
    fill(27, 45, 181);
  
//IF mouse moves over the threshold of 200px then change color to RED    
    if(mouseX >= 200) {
        fill(247,7,47);
    }
    
}
