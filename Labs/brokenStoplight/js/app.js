//array stating the colors of the stoplight
let colors = ["red", "yellow", "green"];
//variable to select the stoplight colors
let stopLight;

//function to setup the canvas
function setup(){
//Create a canvas 400 by 600    
    createCanvas(400, 600);
//Make the background of the canvas black    
    background("black");
//slow the frame rate down to 10 so the lights flash more normal looking    
    frameRate(10);
}

//set up the draw function for the stoplight
function draw(){
//set variable for the colors to be random from the set of colors from the array "colors"   
let stopLight=random(colors.length);
//choose the closest color value less than or equal to the colors selected for the stoplight
stopLight=floor(stopLight);

//for loop for the circles to be drawn for the stoplight
    for( let i = 3; i <6; i++){   
        fill(colors[stopLight]);
/*draw a circle at 200 across the canvas and starting at 240px down the screen incramenting each time for the next circle*/   
        circle(200, 200 * i/2.5, 50);
    }
}
//console.log to see the colors array and their index
console.log(colors);