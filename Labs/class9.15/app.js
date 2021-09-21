//x position of the circles
let h = 50;
//yposition of the wave
let kl = 100;
let pol = .1;
//radius of the circle
let r = 10;
//spacing of the circle
let j = 10;
let zf;


movement = 0;
xStart=0;
pace= 5;
movement = xStart + pace;


function setup() {
    createCanvas(400, 400);
    

    fill(255, 0, 0);
    //draws a sine curve

    for(let i =0; i<50; i++){
        zf= Math.sin(i * pol) *r;
        circle(i * j + h, zf + kl, 20);
        
    }
    
    //for fun : animate it!
    function draw(){
        circle(movement, 100, 25);
        background(200);
        
    }
}