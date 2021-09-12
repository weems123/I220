let snakeBody=[0,0,0,0,0,0,0,0,0,0];

function setup(){
    createCanvas(800, 600);
    fill(141,24,155);
}

function draw(){
    background("black");

    /*if(snakeBody.length > 10) {
        snakeBody.shift();
    }*/
    if(snakeBody.length < 10) {
        snakeBody.push();
    }

    snakeBody.shift(mouseX);
    for(var i = 0; i < snakeBody.length; i++){
        circle(snakeBody[i], mouseY, i*5);
    }
}
