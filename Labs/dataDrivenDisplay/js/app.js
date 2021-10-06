
//nromal function setup for P5
function setup(){
    createCanvas(800,600);
    
}

//setting up the object to store the items we want to draw
var shape = {
    //draw the x at 400
    x: 400,
    //draw the y at 300
    y: 300,
    //diameter of the object
    diameter: 200,
};

//You use the .opperator to grab items from the object you made 
function draw(){
    //set the background to black
    background('black');
    //set the circle color to purple
    fill("purple");
    //draw the circle to the page using the . method from the object
    ellipse(shape.x, shape.y, shape.diameter);
    
}





