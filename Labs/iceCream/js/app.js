
//Ice Cream Array
let iceCream = ["white", "brown", "pink"];
//Array for the the neopolitan colors
let colors=[ [247, 247, 247], [104, 63, 28], [229, 18, 138] ];

//function to set up the canvas
function setup(){
//create a 900 by 600 canvas    
    createCanvas(900, 600);
//Make the background color of the canvas black    
    background("black");
}

function draw(){
  //for loop to determine if we should draw another rectangle from the array index/length
    for(i = 0; i < iceCream.length; i++)
    {
  //for loop to determine which rectangle gets which color
        for(let a = 0; a < 3; a++)
        {
  //choose which color to fill the rectangles with            
        fill(colors[a]);
  /*draw the rectangle at 225X + 150 over each time times a at 300 Y with width 100, and height 50*/
    rect(225 + 150 * a, 300, 100, 50);
        }
    } 
}

console.log(iceCream.indexOf("white"));
