//Array for the sanke body
let snakeBody=[0,0,0,0,0,0,0,0,0,0];

//function to set up the canvas
function setup(){
//Draw the canvas with a size 800 by 600    
    createCanvas(800, 600);
//make the snake color purple    
    fill(141,24,155);
}

//Function to setup draw
function draw(){
//give the background a black color    
    background("black");

    /*if(snakeBody.length > 10) {
        snakeBody.shift();
    }*/
/*IF the snake body is greater than 10, remove a circle from the array and put it back for future use*/
    if(snakeBody.length > 10) {
        snakeBody.shift();
    }

    snakeBody.push(mouseX);
  //for loop defining the size of the snake up to snake.length which is 10  
    for(var i = 0; i < snakeBody.length; i++){
 //Draw a snake and move it with the mouse with i * 5 radius flowing through the for loop*/       
        circle(snakeBody[i], mouseY, i*5);
    }
}
