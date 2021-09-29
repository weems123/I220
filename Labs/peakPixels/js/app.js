//create the new element
let squareDiv = document.getElementById("squareDiv");
//make the height of the box 100
let squareHeight = 100;
//make the length of the box 100
let squareLength = 100;
//place the box onto the page
document.body.appendChild(squareDiv);
//display the length of the box in px
squareDiv.style.width = squareLength + "px";
//display the height of the box in px
squareDiv.style.height = squareHeight + "px";
squareDiv.style.backgroundColor= "#6ace40";
//give the box a solid black border
squareDiv.style.borderStyle = "solid";
//place the square onto the canvas

//function to make the square grow
function bigger(){
//take the height of the square and grow it by 1.1 its original size
   squareHeight = squareHeight *=1.1;
//take the length of the square and grow it by 1.1 its original size
   squareLength = squareLength *=1.1;
//display the growth of the height of the square in px
   squareDiv.style.height = squareHeight + "px";
   //display the growth of the height of the square in px
   squareDiv.style.width = squareLength + "px";
}