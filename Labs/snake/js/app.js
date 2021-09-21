//Array for the sanke bodies
let snakeBody=[0,0,0,0,0,0,0,0,0,0];
let snakeBodyY=[0,0,0,0,0,0,0,0,0,0];
//adding the cirlces in to each of the snake depending on X or Y with the mouse on the canvas
let snakeBody1 = snakeBody +2;
let snakeBody2 = snakeBodyY +2;

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
/*IF the snake body is greater than 10, remove a circle from the array and put it back for future use*/
    if(snakeBody.length > 10 && snakeBodyY.length < 10) {
        snakeBody.shift();
    }
    else if(snakeBody.length < 10 && snakeBodyY.length > 10) {
        snakeBodyY.shift();
    }
     if(snakeBody.length > 10 && snakeBodyY.length > 10) {
        snakeBody.shift();
        snakeBodyY.shift();
    }
    //adds a new element to the end of the array for the movement left and right (X)
    snakeBody.push(mouseX);
    //adds a new element to the end of the array for the movement up and down (Y)
    snakeBodyY.push(mouseY)
  //for loop defining the size of the snake up to snake.length which is 10  
    for(var i = 0; i < snakeBody.length; i++){
 //Draw a snake and move it with the mouse with i * 5 radius flowing through the for loop*/       
        circle(snakeBody[i], snakeBodyY[i], i*5);
    }
}
