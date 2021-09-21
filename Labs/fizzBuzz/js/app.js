
//variable for count
let count = 0;
//variable for where to start drawing the circle
let x = 25;
//variable for where to start drawing the square
let s = 13;

//creating the canvas to work with
function setup() {
    createCanvas(800, 600);
    background(200);
}

//draw function for the circles
function draw() {
    //begining of the while loop
    while(count < 25)
    {
        /*IF count is divisible by 3 AND 5 with no remainder...
        Had to put this one first because some numbers are divisble by 3
        and some are divisible by 5 so it wouldn't get down to this if statement*/ 
        if(count % 3 == 0 && count % 5 == 0)
        {
            //fill the SQUARE with that color
            fill(32, 68, 178);
            //draw a square 
            square(s, 288, 24);
        }
        //IF count is divisible by three with no remainder
        else if(count % 3 == 0)
        {
            //Fill the circle with this color
            fill(177, 40, 211);
            //Draw a circle 
            circle(x, 300, 25);
        } 
        //IF count is divisible by 5 with no remainder
        else if(count % 5 == 0)
        {
            //Fill with this color
            fill(63, 178, 32);
            //Draw a square
            square(s, 288, 24);
        }
        else
        {
            //All other circles to be filled with black
            fill(0,0,0);
            //Draw a circle
            circle(x, 300, 25);
        }
        //increase s by 30 each time the loop runs
        s += 30;
        x += 30;
        //increase count by 1 each time the loop runs
        count++;
    }
}