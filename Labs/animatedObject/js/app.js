//nromal function setup for P5
function setup(){
    createCanvas(800,600);
    
}

//setting up the object to store the items we want to draw
var shape1 = {
    //start at 0
    x: 0,
    //start y at 300
    y: 300,
    //diameter of the circle
    diameter: 100,
};
//setting up the object to store items for shape2
var shape2 = {
    //start at 0
    x: 0,
    //start y at 200
    y: 200,
    //diameter of the circle
    diameter: 75,
};

//setting up object to store items for shape 3
var shape3 = {
    //start at 0
    x: 0,
    //start y at 120
    y: 120,
    //diamert of the circle
    diameter: 60,
};

//You use the .opperator to grab items from the object you made 
function draw(){
    //backgorund color of the canvas
    background('black');
    //color of the circles for the snowman
    fill("white");
    //drawing the first circle with the object from var shape1
    circle(shape1.x, shape1.y, shape1.diameter);
    //drawing the second object from var shape 2
    circle(shape2.x, shape2.y, shape2.diameter);
    //drawing the third object from var shape3
    circle(shape3.x, shape3.y, shape3.diameter);
    //setting the speed for the first shape
    shape1.x = shape1.x  + 1;
    //setting the shape for the second shape
    shape2.x = shape2.x +1;
    //setting the shape for the third object
    shape3.x = shape3.x +1;
}

