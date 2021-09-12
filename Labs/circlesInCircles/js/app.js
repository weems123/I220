let i = 0;
let radius = 25;

function setup()
{
    createCanvas(800, 600);
    background(200);
}

function draw()
{
    while(i < 25)
    {
        //don't fil the circle with any color to just show the outline
        noFill();
        ellipse(400, 300, radius);
        //add 15 to the radius each time
        radius +=15;
        i++;
    }
}