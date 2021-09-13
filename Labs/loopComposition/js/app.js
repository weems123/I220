//function to set up the canvas
function setup() {
    createCanvas(800, 600);
}

function draw() 
{//variable for first while loop to start at
    let a=0;
//variable for the second while loop to start at    
    let c=0;
  
    //while loop to draw purple circles on the left side of the screen
    while(a <400)
    {
     let b = random(600 * 300);
     noStroke();
     //make the circles on the left purple
     fill("purple");
     //draw the circles randomly from x0 to x 350 with a radius of 50
     circle(random(0, 350), b, 50);
      //add a purple circle each time the loop runs
     a++ 
     //console.log to differentiate the two loops
     console.log(a);  
    }

    //while loop to draw black circles on the right side of the screen 
    while(c < 400)
    {
        /*bring the circles in randomly on the right side of the sreen until they meet in the middle with a speed of 100*/
        let d = random(600 *300);
        //No outline of th circles
        noStroke();
        //fill the circles black
        fill("black");
        //draw the circles randomly from x350 to x 800 with a radius of 50 
        circle(random(350, 800), d, 50);
        //add a black circle each time the loop runs
        c++
        //console.log to differentiate the two loops
        console.log(c + "text");
    }
    
}
