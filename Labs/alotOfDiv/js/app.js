//var randomColor = '#'+ Math.floor(Math.random()*255,100,100).toString(16);


//for loop to print the square 100 times
for (i = 0; i<100; i++){
//create the square that should be drawn onto the page with the name "squareDiv"
let squareDiv = document.createElement("squareDiv");
//setting the width of the square
squareDiv.style.width = "20px";
//setting the height of the square
squareDiv.style.height = "20px";
/*setting the float to left so it will stop at the end of the scren and go to the next line*/
squareDiv.style.cssFloat = "left";
//settting background color (still trying to figure out random color)
squareDiv.style.backgroundColor= "#30bf20"
//set a margin so the blocks are actually away from eachother
squareDiv.style.margin="1px";
//painting the block onto the actual page
document.body.appendChild(squareDiv);

}
