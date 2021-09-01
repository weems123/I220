//circle size
let size = 10;

//setting up canvas
function setup() {
    createCanvas(800,600);
}

function draw() {
    //put background in draw to keep it from being more than one circle
    background(200);
    circle(mouseX, mouseY, size);
}

//function to click the circle to make it grow
function mouseClicked() {
    //if mouse clicked add 10 to "size"
    size+= 10;
    //if size gets to 60 return the size back to 10
    if(size===60) {
        //send size back to 10
    size = 10;
    }
}
