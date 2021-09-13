/*let block=[];
gravity = .02

let speed= 0;

function setup(){
    createCanvas(800, 600);
}


    function mousePressed(){
        speed = speed+5;
        rect(mouseX +speed, mouseY, 100, 50);
        }*/

 let colors =["green", "yellow", "red", "blue", "purple"];
 
let speed = 5;
let x = 200;
let y= 200;

let positionX;
let positionY;


let xSpeed = 5;
let ySpeed = 5;

 function setup(){
     createCanvas (800, 600);
     background(200);
     let positionX = random(800);
     let positionY = random(600);
 }

 function draw(){
     let r=random(255);
     let g=random(255);
     let b=random(255);
     speed = speed + 5;
 for(i = 0; i < colors.length; i++){
    fill(r, g, b); 
    circle(speed/2, y, 50);

    if(positionX >= width || positionX <= 0){
        xSpeed = xSpeed * -1;
    }

    if(positionY >= height || positionY <= 0){
        ySpeed = ySpeed * -1;
    } 

    positionX = positionX + xSpeed;
    positionY = positionY - ySpeed;
    circle(positionX, positionY, 50);
 }
}   
    

