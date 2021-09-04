//set up for every program/app must come before function(draw)
function setup() {
    createCanvas(600,400);
    background(204);   
}

//looking for the click of the mouse
function mouseClicked() {
    fill(226, 9, 45);
  
    //circle that will created once the mouse is clicked  
    circle(mouseX, mouseY, 25);
//add one to the total in the console
    counter++
//display the number in the console
    console.log(counter);
    
}

//variable created for count number
let count = 0;

