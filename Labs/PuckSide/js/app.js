
//needed to start the code for the program (must come before draw)
function setup() {
    createCanvas(400,300);
}

//starting function of draw that runs 60 times per second
function draw() {
//putting background first so it's just a single circle
    background(200, 200, 200);
    //mouse follows the cursor with a radius of 50
    ellipse(mouseX, mouseY, 50);
//color of the circle(blue)
    fill(27, 45, 181);
  
//IF mouse moves over the threshold of 200px then change color to RED    
    if(mouseX >= 150) {
        fill(247,7,47);
    }   
}
