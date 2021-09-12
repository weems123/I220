//set the number of rows to 3 since Zero is the firt number in coding(ie, 4 rows)
/*let blockRows = 3;

//setting up the canvas with the background color
function setup(){
    createCanvas(800, 600);
    background(200);
}

//draw function to place the blocks 
function draw() {
    //The color of the blocks
    fill(141, 24, 155);
    //For loop adding the rows to the blocks while blockRows is less than or equal to 3 
    for(let i = 0; i <= blockRows; i++ )
    {

        for(let b = 0; b <= i; b++)
        {
            //drawing the actual squares with the distance of 27 betwen the squares with a 
            square(b * 30, i * 30, 30);
        }
    }
}*/


function setup() {
    createCanvas(800, 600);
    background(200);
}

function draw() 
{
    let c=0;
    let a=0;
    //let c = random(255);
    //let d = random(255);
    //let e = random(255);
    //for loop to tell where to draw the circles and how far across the canvas
    /*for(let a = 0; a <=400; a++){
        let b = random(2*300);
        fill("purple");
        //don't outline the circles
        noStroke();
        //draw a circle randomly on the left side of the screen until full at 50 radius
        circle(a, b, 50);
        
    console.log(a + "text");    
    }
    
    for (let c = 400; c <=800; c++){
        let d = random(2*300);
        fill("black");
        noStroke();
        circle(c, d, 50);
    }*/
    while(a <400)
    {
     let b = random(600);
     noStroke();
     fill("purple");
     circle(random(0, 350), b, 50);
     a++ 
     console.log(a);  
    }

    while(c < 400)
    {
        let d = random(600);
        noStroke();
        fill("black");
        circle(random(350, 800), d, 50);
        c++
        console.log(c + "text");
    }
    
}
