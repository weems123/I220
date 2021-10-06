
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
//settting background color to a random RGB value from zero to 255 per color range
squareDiv.style.backgroundColor= "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
//set a margin so the blocks are actually away from eachother
squareDiv.style.margin="1px";
//painting the block onto the actual page
document.body.appendChild(squareDiv);

}
