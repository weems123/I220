//vairable to set i to zero
let i = 0;
//variable to start the radius at 25
let radius = 25;

//function set up to creat the canvas
function setup()
{
//create a canvas 800 by 600
    createCanvas(800, 600);
//make the background gray
    background(200);
}

//draw function 
function draw()
{
//while loop for the circle being less than 25
    while(i < 25)
    {
        //don't fil the circle with any color to just show the outline
        noFill();
    //draw a circle at x400, y300 with a radius of 25
        ellipse(400, 300, radius);
    //add 15 to the radius each time
        radius +=15;
    //draw a circle each time the loop runs up to 25
        i++;
    }
}